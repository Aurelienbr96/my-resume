import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { RefObject } from "react";

export const useSendEmail = (form: RefObject<HTMLFormElement>) => {
  const { data, error, ...others } = useMutation({
    mutationFn: () =>
      emailjs.sendForm(
        "service_zs2rfyq",
        "template_kghaqa8",
        form.current || "",
        {
          publicKey: "79B5tLCbogVG8Kh5q",
        },
      ),
  });
  return { data, error, ...others };
};
