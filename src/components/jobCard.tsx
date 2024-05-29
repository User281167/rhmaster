import {
    Card,
    CardHeader,
    CardBody,
    Divider,
    CardFooter,
    Button,
    Link,
} from "@nextui-org/react";

interface JobCardProps {
    title: string;
    post?: string;
    type?: string;
    place?: string;
    argument?: string;
}

export default function JobCard({
    title,
    post,
    type,
    place,
    argument,
}: JobCardProps) {
    return (
        <Card className="space-y-4 border-2 px-12 py-8 shadow-xl backdrop-blur-2xl">
            <CardHeader className="flex gap-3">
                <p className="text-lg font-bold">{title}</p>
            </CardHeader>
            <Divider />

            <CardBody className="space-y-4">
                <p>
                    <span className="font-bold">Cargo:</span> {post}
                </p>

                <p>
                    <span className="font-bold">Tipo:</span> {type}
                </p>

                <p>
                    <span className="font-bold">Lugar:</span> {place}
                </p>

                <Divider />

                <p className="h-80">
                    <span className="font-bold">Argumento:</span> {argument}
                </p>
            </CardBody>

            <Divider />

            <CardFooter>
                <Link href="#" className="m-auto">
                    <Button variant="bordered">Ver detalles</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
