export default function Page() {
  return (
    <main className="container max-w-3xl mx-auto py-12 px-4">
      <section>
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <p className="mb-4">
          We'd love to hear from you! Whether you have a question about our
          service, feedback on how we can improve, or a business inquiry, please
          don't hesitate to get in touch.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Our Email</h2>
        <p className="mb-4">
          The best way to reach us is by email. Please send your message to the
          address below, and we will do our best to get back to you as soon as
          possible.
        </p>
        <p className="mb-4">
          <strong>Email: </strong>
          <a
            href="mailto:steve20200512@gmail.com"
            className="text-blue-600 underline"
          >
            steve20200512@gmail.com
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">What to Include</h2>
        <p className="mb-4">
          To help us assist you more effectively, please try to include as much
          detail as possible in your message. If you are reporting a technical
          issue, please include the browser and device you are using.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Response Time</h2>
        <p className="mb-4">
          We are a small team, but we are dedicated to providing support. We aim
          to respond to all inquiries within 48 business hours. We appreciate
          your patience.
        </p>

        <p>Thank you for using Brat Generator!</p>
      </section>
    </main>
  );
}
