'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ShippingAndReturnPolicy() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#e6eee7]">
      <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\">%3Cg fill=\\"%23000000\\" fill-opacity=\\"1\\" fill-rule=\\"evenodd\\">%3Ccircle cx=\\"3\\" cy=\\"3\\" r=\\"3\\"/%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '24px 24px',
            }}
          ></div>
        </div>


        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-[#3d7344] text-sm font-semibold tracking-wider uppercase">
              Shipping & Returns
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2c5530] mt-4 mb-6">
              Shipping Policy & Refund Policy
            </h1>
            <p className="text-xl text-[#5e724d]">
              At Krsiroots Organics, we are committed to providing high-quality
              organic products and ensuring customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Policy Section */}
      <section className="py-20 bg-[#f7f9f4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#2c5530] mb-8">
              Shipping Policy
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#2c5530] mb-4">
                  Processing and Shipping Time
                </h3>
                <ul className="text-[#5e724d] list-disc pl-6 space-y-2">
                  <li>Orders are processed within 1-3 business days from the date of purchase.</li>
                  <li>
                    Standard delivery times vary depending on the location. Most
                    orders are delivered within 5-7 business days.
                  </li>
                  <li>
                    For remote locations, delivery may take up to 10-15 business days.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2c5530] mb-4">
                  Shipping Charges
                </h3>
                <ul className="text-[#5e724d] list-disc pl-6 space-y-2">
                  <li>Free shipping is available on orders over INR 1000.</li>
                  <li>
                    For orders below this threshold, a flat shipping fee of INR 50
                    will apply.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2c5530] mb-4">
                  Tracking
                </h3>
                <p className="text-[#5e724d] mb-4">
                  Once your order has been shipped, a tracking number will be provided
                  via email or SMS to monitor the shipment status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return & Refund Policy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#f7f9f4] rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#2c5530] mb-8">
              Return & Refund Policy
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#2c5530] mb-4">
                  Returns
                </h3>
                <p className="text-[#5e724d] mb-4">
                  If you are not completely satisfied with your purchase, you may
                  request a return within 7 days of receiving the product. Please
                  ensure the item is unused, in its original packaging, and
                  accompanied by a proof of purchase.
                </p>
                <p className="text-[#5e724d] mb-4">
                  To initiate a return, contact our customer service team at
                  <span className="text-[#2c5530] font-semibold"> <a href="mailto:dovetailindiaservices@gmail.com">dovetailindiaservices@gmail.com</a>  </span>
                  with details of the issue and order information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2c5530] mb-4">
                  Refunds
                </h3>
                <p className="text-[#5e724d] mb-4">
                  Refunds will be processed once the returned item has been received
                  and inspected by our team.
                </p>
                <p className="text-[#5e724d] mb-4">
                  The refund will be issued in the same payment method used during
                  the purchase within 14 business days after receiving the returned
                  product.
                </p>
                <p className="text-[#5e724d] mb-4">
                  If the product is found defective or damaged upon arrival, you may
                  choose between a full refund or a replacement product at no extra
                  cost. Please note that no additional compensation is provided
                  beyond the replacement or refund.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2c5530] mb-4">
                  Non-Refundable Items
                </h3>
                <p className="text-[#5e724d] mb-4">
                  Perishable goods (such as fresh produce) and customized items are
                  non-returnable unless damaged or defective.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2c5530] mb-4">
                  Exchanges
                </h3>
                <p className="text-[#5e724d] mb-4">
                  We offer exchanges for defective or damaged products. To request an
                  exchange, contact us within 7 days of delivery, and we will arrange
                  for the defective product to be picked up and replaced at no cost
                  to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-[#e6eee7]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c5530] mb-6">
            Have Questions About Our Policies?
          </h2>
          <p className="text-xl text-[#5e724d] mb-8 max-w-3xl mx-auto">
            For any queries regarding our refund or shipping policies, feel free to
            contact our customer care team at
            <span className="text-[#2c5530] font-semibold"> <a href="tel:+918866034343">+91 8866034343</a> </span> or
            email us at <span className="text-[#2c5530] font-semibold"> <a href="mailto:dovetailindiaservices@gmail.com">dovetailindiaservices@gmail.com</a> </span>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+918866034343"
              className="inline-block bg-[#2c5530] text-white py-4 px-8 rounded-lg hover:bg-[#3d7344] transition-colors font-semibold text-lg"
            >
              Call Us
            </a>
            <a
              href="mailto:dovetailindiaservices@gmail.com"
              className="inline-block bg-[#3d7344] text-white py-4 px-8 rounded-lg hover:bg-[#2c5530] transition-colors font-semibold text-lg"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
