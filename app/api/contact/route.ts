import { transporter, mailOptions } from '@/app/utils/mail.utils';
import type { NextApiRequest, NextApiResponse } from 'next'
// import ContactFormTemplate from '@/app/(routes)/_components/email templates/ContactFormTemplate';
// import { Logo } from '@/app/(routes)/_components/Logo';
import { renderToString } from 'react-dom/server';



type ResponseData = {
    message: string;
    error?: string;
};


export async function POST(req: Request, res: NextApiResponse<ResponseData>) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message, subject } = body
    
    // console.log(firstName, lastName, email, phone, message);

    
    await transporter.sendMail({
      ...mailOptions,
      subject: `Akira Studios: New message from ${firstName}`,
      text: `${message}\n\n${email}`,
      html: `<section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
      <main className="mt-8">
          <p className="leading-loose text-gray-600 dark:text-gray-300">
              ${firstName} ${lastName} has filled out the
          <span className="font-semibold"> contact</span> form.
          </p>
          <div className="mt-2 grid gap-2">
              <p className="font-medium text-black">Name: <span className='font-normal text-sm'>${firstName} ${lastName}</span></p> 
              <p className="font-medium text-black">email: <span className='font-normal text-sm'>${email} </span></p> 
              <p className="font-medium text-black">message: <span className='font-normal text-sm'>${message}</span></p>
          </div>
      </main>
      <footer className="mt-8">
          <p className="text-gray-500 dark:text-gray-400">
          This email was sent to 
          <Link
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
          >
              admin@akiramediamarketing.com
          </Link>
          </p>
          <p className="mt-3 text-black/50 text-xs dark:text-gray-400">
          ${new Date().getFullYear()} 
              Akira Studios. All Rights Reserved.
          </p>
      </footer>
      </section>`
    });

    return new Response('Form submitted successfully');
  } catch (error) {
      res.status(500).json({ message: 'Failed to submit form'});
    }
}


// react: <ContactFormTemplate firstName={firstName} lastName={lastName}  email={email} phone={phone} subject={subject} message={message} />,