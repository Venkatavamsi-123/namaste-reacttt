

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-600">About Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            We are a passionate team dedicated to delivering delicious meals right to your doorstep. Our mission is to bring the best of local flavors and international cuisine to your home with just a few clicks.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-green-600">Our Story</h3>
              <p className="mt-4 text-gray-600">
                Our journey began with the love of food and the desire to make dining out easier for everyone. We strive to bring high-quality meals with fast delivery to your door.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-green-600">Our Values</h3>
              <p className="mt-4 text-gray-600">
                We believe in quality, sustainability, and customer satisfaction. Our goal is to offer you an amazing food experience with every order.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-green-600">Our Promise</h3>
              <p className="mt-4 text-gray-600">
                We promise fresh ingredients, fast delivery, and a delightful experience with each meal you order. Your satisfaction is our priority!
              </p>
            </div>
          </div>
        </div>

        {/* Creative Section: Our Impact */}
        <div className="mt-16 text-center bg-white p-12 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-green-600">Our Impact</h3>
          <p className="mt-4 text-lg text-gray-600">
            We’ve made a difference in the lives of our customers and continue to grow. Here are a few milestones we're proud of:
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">500k+</div>
              <p className="mt-2 text-lg text-gray-500">Meals Delivered</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">150+</div>
              <p className="mt-2 text-lg text-gray-500">Cities Served</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">100+</div>
              <p className="mt-2 text-lg text-gray-500">Restaurant Partners</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">98%</div>
              <p className="mt-2 text-lg text-gray-500">Customer Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Creative Section: Meet Our Team */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-green-600">Meet Our Team</h3>
          <p className="mt-4 text-lg text-gray-600">
            Our team is at the heart of everything we do. They’re the ones making sure every meal is prepared with care and delivered on time.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="h-24 w-24 rounded-full bg-gray-300 mx-auto"></div>
                <h4 className="mt-4 text-xl font-semibold text-gray-800">Chittiboyina Venkata Vamsi</h4>
                <p className="text-gray-500">Founder & CEO</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="h-24 w-24 rounded-full bg-gray-300 mx-auto"></div>
                <h4 className="mt-4 text-xl font-semibold text-gray-800">Chittiboyina Ashok</h4>
                <p className="text-gray-500">Head Chef</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="h-24 w-24 rounded-full bg-gray-300 mx-auto"></div>
                <h4 className="mt-4 text-xl font-semibold text-gray-800">Pasupuleti Hari</h4>
                <p className="text-gray-500">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
