import MainNavbar from "@/components/mainNavbar";
import { Button } from "@nextui-org/react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <MainNavbar />

            <header className="h-screen bg-gradient-to-br from-main-white to-main-blue to-50% flex justify-center items-center">
                <div className="flex flex-col gap-4 w-2/4">
                    <div>
                        <h1 className="text-[4em] font-bold">HRmaster</h1>
                        <span className="text-main-gray">
                            Bienvenidos a HRMaster
                        </span>
                    </div>

                    <h3 className="font-bold text-2xl">
                        Tu próximo gran paso profesional comienza aquí.
                    </h3>

                    <p>
                        En HRMaster, creemos en el poder del talento y en las
                        oportunidades que pueden transformar vidas. Únete a
                        nuestra comunidad y descubre cómo puedes crecer,
                        aprender y alcanzar tus metas profesionales. Con
                        HRMaster, el éxito está a solo un clic de distancia.
                    </p>
                </div>

                <img src="/main.png" alt="" />
            </header>
        </main>
    );
}
