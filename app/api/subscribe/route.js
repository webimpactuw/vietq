const mailchimp = require("@mailchimp/mailchimp_marketing");

export async function POST(request) {
  const { email } = request.body;

  if (!email) {
    return new Response("Email is required", { status: 400 });
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

        return new Response("", { status: 201 });
      } catch (error) {
        return new Response(error.message || error.toString(), { status: 500 });
      }
    } else {
      return new Response(`You're already subscribed to our newsletter`, {
        status: 400,
      });
    }
  } catch (error) {
    return new Response(error.message || error.toString(), { status: 500 });
  }
}
