import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Options = ({
  description,
  years,
  travelTime,
  payment,
  aspect1,
  aspect2,
  aspect3,
  aspect4,
  link,
  image,
}) => {
  return (
    <Card className="h-full max-h-[600px] hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex justify-center mb-4">
          <div className="w-96 h-24 flex items-center justify-center bg-gray-0 rounded-lg overflow-hidden">
            <Image
              src={`/assets/${image}`}
              alt="Logo de la Universidad"
              width={300}
              height={160}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </div>
        <CardDescription className="text-center text-xl min-h-[2.5rem] flex items-center justify-center">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow flex flex-col">
        <div className="space-y-3 flex-grow">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-md">{years}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-md">{travelTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-md">{payment}</span>
          </div>
        </div>
        <div className="pt-4 flex-grow">
          <h4 className="font-semibold mb-2">Aspectos Clave:</h4>
          <ul className="space-y-1 text-md text-muted-foreground">
            <li>• {aspect1}</li>
            <li>• {aspect2}</li>
            <li>• {aspect3}</li>
            <li>• {aspect4}</li>
          </ul>
        </div>
        <div className="mt-auto pt-4">
          <Link href={link} className="block w-full">
            <Button className="w-full bg-blue-700 cursor-pointer">
              Ver costos
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
