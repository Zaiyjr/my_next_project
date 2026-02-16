import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-6">
        {/* ສ່ວນເນື້ອຫາຫຼັກ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Logo & Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-sky-600 mb-4">junior.DEV</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              ບໍລິສັດໄອທີຊັ້ນນຳໃນລາວ ທີ່ເນັ້ນການພັດທະນາເວັບໄຊ ແລະ ແອັບພລິເຄຊັນ ດ້ວຍເຕັກໂນໂລຊີທີ່ທັນສະໄໝ.
            </p>
            <div className="flex gap-4 text-xl text-gray-400">
              <Link href="#" className="hover:text-sky-600 transition-colors"><FaFacebook /></Link>
              <Link href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></Link>
              <Link href="#" className="hover:text-black transition-colors"><FaXTwitter /></Link>
              <Link href="#" className="hover:text-green-500 transition-colors"><FaWhatsapp /></Link>
              <Link href="#" className="hover:text-black transition-colors"><FaTiktok /></Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-gray-800 mb-6">ເມນູຫຼັກ</h3>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="/" className="hover:text-sky-600 transition-colors">ໜ້າທຳອິດ</Link></li>
              <li><Link href="/about" className="hover:text-sky-600 transition-colors">ກ່ຽວກັບພວກເຮົາ</Link></li>
              <li><Link href="/service" className="hover:text-sky-600 transition-colors">ບໍລິການ</Link></li>
              <li><Link href="/blog" className="hover:text-sky-600 transition-colors">ບົດຄວາມ</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-gray-800 mb-6">ຕິດຕໍ່ພວກເຮົາ</h3>
            <ul className="space-y-4 text-gray-500">
              <li>📍 ICT Center, Saysettha, Vientiane</li>
              <li>📧 contact@juniordev.la</li>
              <li>📞 +856 20 XXXX XXXX</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-bold text-gray-800 mb-6">ຕິດຕາມຂ່າວສານ</h3>
            <p className="text-gray-500 mb-4 text-sm">ລົງທະບຽນເພື່ອຮັບຂໍ້ມູນໃໝ່ໆຈາກພວກເຮົາ.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email ຂອງທ່ານ" 
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors text-sm">
                ຕິດຕາມ
              </button>
            </div>
          </div>
        </div>

        {/* ສ່ວນ Copyright ດ້ານລຸ່ມ */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2026 junior.DEV Sole Co., Ltd. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ</Link>
            <Link href="#" className="hover:underline">ເງື່ອນໄຂການບໍລິການ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;