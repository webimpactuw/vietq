import {
  ChevronDownIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";
import { Field, ErrorMessage } from "formik";

export function FormLabel({ htmlFor, children }) {
  return (
    <label
      className="tracking-tightest font-semibold text-xl"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export function FormField({
  id,
  name,
  type = "text",
  autoComplete,
  placeholder = "",
}) {
  return (
    <Field
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="placeholder-gray-500 text-blue-900 bg-white border border-white focus:outline-blue-700 hover:bg-gray-100 transition-colors tracking-tighter block w-full rounded-md pt-2 pb-2.5 px-4 focus:ring-blue-500 focus:border-blue-500"
    />
  );
}

export function FormSelect({ id, name, children }) {
  return (
    <div className="relative w-full">
      <Field
        id={id}
        name={name}
        component="select"
        className="placeholder-gray-500 text-blue-900 border border-white focus:outline-blue-700 hover:bg-gray-100 transition-colors tracking-tighter block w-full rounded-md pt-2 pb-2.5 px-4 focus:ring-blue-500 focus:border-blue-500"
      >
        {children}
      </Field>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <ChevronDownIcon className="h-5 w-5" />
      </div>
    </div>
  );
}

export function FormTextArea({ id, name, placeholder = "" }) {
  return (
    <Field
      id={id}
      name={name}
      component="textarea"
      placeholder={placeholder}
      rows="6"
      className="placeholder-gray-500 text-blue-900 bg-white border border-white focus:outline-blue-700 hover:bg-gray-100 transition-colors tracking-tighter block w-full rounded-2xl p-4 focus:ring-blue-500 focus:border-blue-500"
    />
  );
}

export function FormErrorMessage({ name }) {
  return (
    <div>
      <ErrorMessage name={name}>
        {(msg) => (
          <span className="text-red-500 tracking-tighter font-semibold text-sm">
            {msg}
          </span>
        )}
      </ErrorMessage>
    </div>
  );
}
