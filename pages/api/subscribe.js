const mailchimp = require("@mailchimp/mailchimp_marketing");

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
  });

  const listId = process.env.MAILCHIMP_AUDIENCE_ID;

  const subscribingUser = {
    email_address: email,
    status: "subscribed",
  };

  try {
    const response = await mailchimp.lists.getListMember(listId, email);

    if (response.status === 404) {
      try {
        const response = await mailchimp.lists.addListMember(
          listId,
          subscribingUser
        );

        return res.status(201).json({ error: "" });
      } catch (error) {
        return res.status(500).json({
          error: error.message || error.toString(),
        });
      }
    } else {
      return res.status(400).json({
        error: `You're already subscribed to our newsletter`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message || error.toString(),
    });
  }
};
