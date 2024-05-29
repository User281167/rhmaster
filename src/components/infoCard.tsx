import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

interface InfoCardProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export default function InfoCard({
    title,
    subtitle,
    icon,
    children,
}: InfoCardProps) {
    return (
        <Card className="max-w-md space-y-4 border-2 px-12 py-8 shadow-md bg-white">
            <CardHeader className="flex gap-3">
                {icon}
                <div className="flex flex-col">
                    <p className="text-md font-bold text-xl">{title}</p>
                    <p className="text-default-500 text-lg">{subtitle}</p>
                </div>
            </CardHeader>

            <Divider />

            <CardBody>{children}</CardBody>

            <Divider />
        </Card>
    );
}
