'use client';
import Balancer from 'react-wrap-balancer';

import { ReservationLink } from '../ReservationLink';

// import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/example';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
import * as m from '@/paraglide/messages';

// const formSchema = z.object({
//   email: z.string().email({
//     message: 'Please enter a valid email address.',
//   }),
// });

export function CTA({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  // 1. Define your form.
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: '',
  //   },
  // });

  // // 2. Define a submit handler.
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }

  return (
    <Section id={`#${m.contact_id()}`}>
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="!my-0">{title}</h2>
        <p className="text-lg opacity-70 md:text-2xl">
          <Balancer>{description}</Balancer>
        </p>
        <ReservationLink />
        {/* <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 flex h-fit items-center justify-center gap-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="md:w-64"
                      placeholder="Your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form> */}
      </Container>
    </Section>
  );
}

export default CTA;
