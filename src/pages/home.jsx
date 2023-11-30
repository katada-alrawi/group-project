
export default function Home() {
  return (
    <div className="container mx-auto p-5">
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to Katadas News Agency</h1>
        <p className="text-lg text-center">
          Your trusted source for breaking news, analysis, exclusive interviews, and more.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Our Mission</h2>
        <p className="text-md">
          At Katadas News Agency, we are committed to delivering factual, unbiased news to our audience. Our mission is to inform, educate, and engage the public with comprehensive coverage of local and global events.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Our Values</h2>
        <ul className="list-disc pl-5">
          <li><strong>Integrity:</strong> Upholding the highest standards of journalism.</li>
          <li><strong>Accuracy:</strong> Ensuring all information is thoroughly verified.</li>
          <li><strong>Inclusivity:</strong> Representing diverse voices and perspectives.</li>
          <li><strong>Innovation:</strong> Leveraging technology to enhance storytelling.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Why Choose Us?</h2>
        <p className="text-md">
          With a commitment to truth and a passion for community, Katadas News Agency is more than just a news outlet; we are a part of your daily life. Join us in our journey to bring forth the stories that matter.
        </p>
      </section>
    </div>
  );
}
