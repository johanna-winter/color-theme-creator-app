import { useState } from "react";
import { initialColors } from "../../lib/colors";

export default function ColorForm({ onAddColor }) {
  const [color, setColor] = useState({ defaultValue: initialColors });
  return;
}
