import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraControllerProps {
  targetPosition: THREE.Vector3;
  targetRotation: THREE.Euler;
}

const CameraController: React.FC<CameraControllerProps> = ({ targetPosition, targetRotation }) => {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.lerp(targetPosition, 0.1); 
    camera.rotation.x += (targetRotation.x - camera.rotation.x) * 0.1;
    camera.rotation.y += (targetRotation.y - camera.rotation.y) * 0.1;
    camera.rotation.z += (targetRotation.z - camera.rotation.z) * 0.1;
  });

  return null;
};

export default CameraController;
