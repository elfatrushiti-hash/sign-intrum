export default function Comparison(){
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Handwritten</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Printing documents</li>
            <li>Shipping costs</li>
            <li>Manual work</li>
            <li>Paper consumption</li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Digital Signature</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Instant signing</li>
            <li>No shipping</li>
            <li>Minimal work</li>
            <li>Paperless process</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
