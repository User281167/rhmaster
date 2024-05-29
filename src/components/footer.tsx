import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className="bg-main-gray text-white flex justify-center items-center gap-32 h-80">
            <img src="/icon2.png" alt="" />

            <div className="space-y-2">
                <p className="text-xl font-bold">Compañia</p>

                <p>Política de datos</p>
                <p>Terminos y condiciones</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-bold">Contáctanos</p>

                <p>(+57) 31020311411</p>
                <p>(+57) 3133395656</p>
                <p>info@localizamos.com</p>
            </div>

            <div className="flex">
                <a
                    href="https://www.facebook.com/LocalizamosTSA"
                    target="_blank"
                >
                    <IconBrandFacebook size={64} />
                </a>

                <a
                    href="https://www.instagram.com/localizamos/"
                    target="_blank"
                >
                    <IconBrandInstagram size={64} />
                </a>
            </div>
        </footer>
    );
}
