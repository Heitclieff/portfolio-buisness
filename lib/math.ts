export function randomPointInSphere(numPoints: number, radius: number) {
  // Each point has 3 coordinates (x, y, z), so we need numPoints * 3 slots
  const points = new Float32Array(numPoints * 3);

  for (let i = 0; i < numPoints; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }

  return points;
}
