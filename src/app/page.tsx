import Footer from "@/components/footer";
import InfoCard from "@/components/infoCard";
import JobCard from "@/components/jobCard";
import MainNavbar from "@/components/mainNavbar";
import { Button, Link } from "@nextui-org/react";
import {
    IconUser,
    IconUserHeart,
    IconBookUpload,
    IconFriends,
    IconRocket,
    IconArrowRight,
} from "@tabler/icons-react";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <MainNavbar />

            <header className="h-screen bg-gradient-to-br from-main-white to-main-blue to-50% flex justify-center items-center">
                <div className="flex flex-col gap-8 w-2/4">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[4em]">HRMaster</h1>

                        <span className="text-main-gray text-2xl">
                            Bienvenidos a HRMaster
                        </span>
                    </div>

                    <p className="text-2xl font-bold">
                        Tu próximo gran paso profesional comienza aquí.
                    </p>

                    <p className="text-white">
                        En HRMaster, creemos en el poder del talento y en las
                        oportunidades que pueden transformar vidas. Únete a
                        nuestra comunidad y descubre cómo puedes crecer,
                        aprender y alcanzar tus metas profesionales. Con
                        HRMaster, el éxito está a solo un clic de distancia.
                    </p>

                    <Button color="primary" className="w-fit">
                        Trabaja con nosotros <IconArrowRight />
                    </Button>
                </div>

                <img src="/main.png" alt="" />
            </header>

            <section>
                <h2>Soluciones que ofrecemos</h2>

                <div className="flex justify-center items-start gap-10 relative">
                    <InfoCard
                        title="Para Candidatos"
                        subtitle="Impulsamos tu carrera profesional"
                        icon={<IconUser size={48} />}
                    >
                        <ul className="list-disc list-inside space-y-4">
                            <li>
                                Ofertas de Empleo Personalizadas: Accede a
                                oportunidades laborales en Localizamos que se
                                ajusten a tu perfil, experiencia y aspiraciones
                                profesionales.
                            </li>
                            <li>
                                Asesoramiento Profesional: Recibe orientación
                                personalizada para mejorar tu currículum y
                                prepararte para entrevistas, maximizando tus
                                posibilidades de éxito.
                            </li>
                            <li>
                                Capacitación y Desarrollo: Participa en cursos y
                                programas de formación para adquirir nuevas
                                habilidades y crecer profesionalmente dentro de
                                Localizamos.
                            </li>
                        </ul>
                    </InfoCard>

                    <div className="mt-28">
                        <InfoCard
                            title="Para Empleados"
                            subtitle="Apoyamos tu crecimiento dentro de la empresa"
                            icon={<IconUserHeart size={48} />}
                        >
                            <ul className="list-disc list-inside space-y-4">
                                <li>
                                    Programas de Desarrollo Profesional:
                                    Aprovecha nuestras iniciativas de
                                    capacitación continua para desarrollar tus
                                    habilidades y avanzar en tu carrera.
                                </li>
                                <li>
                                    Evaluaciones de Desempeño: Obtén
                                    retroalimentación constructiva a través de
                                    evaluaciones periódicas que te ayudarán a
                                    medir y mejorar tu desempeño.
                                </li>
                                <li>
                                    Gestión de Beneficios: Administra tus
                                    beneficios laborales y participa en
                                    programas de reconocimiento para celebrar
                                    tus logros y contribuciones.
                                </li>
                                <li>
                                    Ambiente de Trabajo Colaborativo: Forma
                                    parte de una cultura organizacional que
                                    valora el trabajo en equipo, la innovación y
                                    el desarrollo personal.
                                </li>
                            </ul>
                        </InfoCard>
                    </div>

                    <svg
                        width={950}
                        height={750}
                        className="absolute -z-20 rounded-xl"
                    >
                        <path
                            d="M 0 750 C 500 500 500 0 950 0 L 950 750 L 0 750"
                            fill="#046BD2"
                        />
                    </svg>
                </div>
            </section>

            <section className="flex justify-around max-w-7xl m-auto gap-10 items-center">
                <div className="space-y-4 pr-10 border-r-2 border-black w-1/2">
                    <h2>Descubre Oportunidades Emocionantes en Localizamos</h2>

                    <p className="text-main-gray text-2xl">
                        ¿Estás listo para dar el siguiente paso en tu carrera?
                    </p>

                    <p>
                        En Localizamos, creemos en el poder del talento y la
                        pasión. Estamos en busca de personas como tú, con el
                        deseo de crecer, aprender y contribuir a un entorno
                        dinámico y en constante evolución.
                    </p>

                    <p className="text-main-gray text-2xl">
                        Únete a Nosotros y Transforma Tu Futuro
                    </p>

                    <p>
                        En Localizamos, te ofrecemos más que solo un empleo. Te
                        brindamos la oportunidad de formar parte de un equipo
                        comprometido con la innovación, la excelencia y el
                        desarrollo personal y profesional. Aquí, tu crecimiento
                        es nuestra prioridad.
                    </p>
                </div>

                <div className="space-y-12 w-1/2">
                    <div className="space-y-2">
                        <div className="flex gap-2 items-center">
                            <IconBookUpload size={48} />
                            <h4>Oportunidades Diversas</h4>
                        </div>

                        <p>
                            Explora una amplia gama de posiciones en diferentes
                            áreas y niveles, adaptadas a tus habilidades y
                            aspiraciones.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex gap-2 items-center">
                            <IconFriends size={48} />
                            <h4>Cultura Colaborativa</h4>
                        </div>

                        <p>
                            Trabaja en un ambiente que fomenta la colaboración,
                            la creatividad y el desarrollo continuo.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex gap-2 items-center">
                            <IconRocket size={48} />
                            <h4>Impacto Real</h4>
                        </div>

                        <p>
                            Sé parte de proyectos significativos que tienen un
                            impacto positivo en nuestra comunidad y más allá.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-image space-y-10">
                <h2>Descubre Oportunidades Emocionantes</h2>

                <div className="flex max-w-7xl m-auto gap-8">
                    <div className="space-y-4 w-1/2">
                        <p className="text-main-gray text-2xl">
                            Tu próximo gran desafío profesional te espera
                        </p>

                        <p>
                            En Localizamos, entendemos que encontrar el trabajo
                            perfecto es un viaje emocionante y transformador.
                            Por eso, hemos creado un entorno donde puedes
                            descubrir y explorar una variedad de oportunidades
                            laborales que se alinean con tus intereses,
                            habilidades y aspiraciones.
                        </p>
                    </div>

                    <div className="space-y-4 w-1/2">
                        <p className="text-main-gray text-2xl">
                            Comienza Tu Búsqueda Hoy
                        </p>

                        <p>
                            No pierdas la oportunidad de encontrar el trabajo
                            que siempre has deseado. Explora nuestras ofertas de
                            empleo y da el primer paso hacia una carrera exitosa
                            y satisfactoria en Localizamos.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-32 w-8/12 m-auto">
                    <JobCard title="Oferta de Empleo" />
                    <JobCard title="Oferta de Empleo" />
                </div>

                <div className="w-1/3 m-auto flex flex-col gap-4">
                    <p className="text-2xl text-center font-bold">
                        No Dejes Pasar Esta Oportunidad
                    </p>

                    <p className="text-center">
                        Tu próximo gran desafío y éxito profesional están a solo
                        un clic de distancia. Descubre las ofertas de empleo que
                        tenemos para ti y encuentra el lugar donde puedes marcar
                        la diferencia.
                    </p>

                    <Link href="/ofertas">
                        <Button color="primary" className="w-fi m-auto">
                            Explora Nuestras Ofertas de Empleo
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
