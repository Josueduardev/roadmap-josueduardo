import Image from "next/image"

export const Carrusel = () => {
  return (
    <div className="grid gap-4">
      <div>
        <div className="relative h-[480px] w-full">
          <Image
            src="/assets/images/oport.jpg"
            alt="Oportunidades"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 h-[140px]">
        <div>
          <div className="relative h-full w-full">
            <Image
              src="/assets/images/bichos.jpg"
              alt=""
              fill
              className="object-cover rounded-lg cursor-pointer"
            />
          </div>
        </div>
        <div>
          <div className="relative h-full w-full">
            <Image
              src="/assets/images/concurso.jpg"
              alt=""
              fill
              className="object-cover rounded-lg cursor-pointer"
            />
          </div>
        </div>
        <div>
          <div className="relative h-full w-full">
            <Image
              src="/assets/images/ina.jpg"
              alt=""
              fill
              className="object-cover rounded-lg cursor-pointer"
            />
          </div>
        </div>
        <div>
          <div className="relative h-full w-full">
            <Image
              src="/assets/images/ma.jpg"
              alt=""
              fill
              className="object-cover rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
