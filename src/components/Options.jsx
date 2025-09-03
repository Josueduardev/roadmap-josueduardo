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
  university,
  description,
  years,
  travelTime,
  payment,
  aspect1,
  aspect2,
  aspect3,
  link,
  image,
}) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <Image
          src={`/assets/${image}`}
          alt="Key Institute"
          width={300}
          height={300}
        />
        <CardTitle className="text-xl text-primary">{university}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">{years}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">{travelTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">{payment}</span>
          </div>
        </div>
        <div className="pt-4">
          <h4 className="font-semibold mb-2">Aspectos Clave:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• {aspect1}</li>
            <li>• {aspect2}</li>
            <li>• {aspect3}</li>
          </ul>
        </div>
        <Link href={link} className="block w-full">
          <Button className="w-full cursor-pointer">Explorar</Button>
        </Link>
      </CardContent>
    </Card>
  );
};
