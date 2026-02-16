import DesignerAnim from "../../../public/animations/Designer.json"
import CodeAim from '../../../public/animations/Coder.json'
import BusinessmanAim from '../../../public/animations/Businessman flies up with rocket.json'
// 2. ໃສ່ export const ແລະ ປິດວົງເລັບໃຫ້ຄົບ
const aboutData = [
  {
    title: "Designer Tools",
    subTitle: "ສ້າງສັນຜົນງານດ້ວຍຄວາມຄິດ",
    description: "ພວກເຮົາໃຊ້ເຄື່ອງມືທີ່ທັນສະໄໝເພື່ອອອກແບບ UI/UX.",
    image: DesignerAnim,
    type: "A",
  },
  {
    title: "Business Solutions",
    subTitle: "ວາງແຜນທຸລະກິດໃຫ້ເຕີບໂຕ",
    description: "ຊ່ວຍໃຫ້ທຸລະກິດຂອງທ່ານກ້າວໄປຂ້າງໜ້າ.",
    image: BusinessmanAim,
    type: "B",
  },
  {
    title: "Clean Coding",
    subTitle: "ຂຽນໂປຣແກຣມໃຫ້ມີຄຸນນະພາບ",
    description: "ເນັ້ນການຂຽນ Code ທີ່ອ່ານງ່າຍ ແລະ ປອດໄພ.",
    image: CodeAim,
    type: "A",
  },
]; // ຢ່າລືມອັດວົງເລັບປິດບ່ອນນີ້!
export default aboutData