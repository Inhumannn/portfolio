"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";

export function ContactForm() {
  const { t } = useTranslation();

  const contactSchema = z.object({
    name: z.string().min(2, { message: t("page-home.form-name-warning") }),
    email: z.string().email({ message: t("page-home.form-email-warning") }),
    message: z
      .string()
      .min(10, { message: t("page-home.form-message-warning") }),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    toast.success("Form submitted", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4 text-white">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // Utilise pour renvoyer les données si besoins
    console.log("Form submitted");
    form.reset();
  };

  return (
    <div className="w-full flex justify-center items-center py-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-xl space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("page-home.form-name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("page-home.form-name2")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("page-home.form-email")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("page-home.form-email2")}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("page-home.form-textarea")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("page-home.form-textarea2")}
                    className="resize-none h-50"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}
