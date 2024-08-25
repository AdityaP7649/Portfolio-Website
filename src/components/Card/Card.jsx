import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import "./Cars.css";

export default function App({
  projectTitle,
  projectDescription,
  projectImage,
}) {
  return (
    <CardContainer className="your-container-class">
      <CardBody className="your-body-class">
        <CardItem
          translateZ={50}
          className="text-xl font-bold"
        >
          {projectTitle}
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          {projectDescription}
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <img
            src={projectImage}
            alt="Sample Image"
            className="h-60 w-full object-cover rounded-xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
