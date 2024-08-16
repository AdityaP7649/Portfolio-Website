

import { CardContainer, CardBody, CardItem } from "../ui/3d-card";

export default function App() {
  return (
    <CardContainer className="your-container-class">
      <CardBody className="your-body-class">
        <CardItem
          translateZ={50}
          className="text-xl font-bold text-neutral-600"
        >
          Floating Title
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          This card demonstrates a 3D hover effect using React.
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Sample Image"
            className="h-60 w-full object-cover rounded-xl"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="#"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Learn More →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
          >
            Sign Up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
