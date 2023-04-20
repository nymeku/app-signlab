import Image from "next/image"

const Brand = ({ ...props }) => <Image src="/signlab.svg" alt="Signlab logo" {...props} width={110} height={50} priority />
export default Brand
