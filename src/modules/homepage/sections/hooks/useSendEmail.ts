import { useMutation } from "@tanstack/react-query";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { RefObject } from "react";
import { TFunction } from "i18next";

export const useSendEmail = (
  form: RefObject<HTMLFormElement>,
  t: TFunction<"translation", undefined>,
) => {
  const { data, error, ...others } = useMutation({
    mutationFn: () =>
      emailjs.sendForm(
        "service_zs2rfyq",
        "template_kghaqa8",
        form.current || "",
        {
          publicKey: import.meta.env.VITE_EMAIJS_KEY,
        },
      ),

    onError: (e: EmailJSResponseStatus) => {
      if (e.status === 400) return t("contactPage.error400");

      return t("errors.common");
    },
  });
  return { data, error, ...others };
};
