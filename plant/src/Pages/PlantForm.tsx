import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { FileInput } from "@/components/ui/file-input";
// import { useSoone } from "sooner"; // Use Sooner

export default function PlantForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    area: "",
    photo: null,
  });

  // Handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({ ...prev, photo: file }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can process form data (e.g., send to an API)

    // Show success feedback using Sooner
    // success("Plant added successfully", "Your plant data has been saved.");
  };

  return (
    <div className="max-w-2xl mx-auto p-8 dark:border dark:border-gray-500 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6 text-primary">
        Add a New Plant
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Plant Name */}
        <div className="grid gap-3">
          <Label htmlFor="name" className="text-lg">
            Plant Name
          </Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter plant name"
            required
            className="p-3 border border-muted rounded-md"
          />
        </div>

        {/* Plant Description */}
        <div className="grid gap-3">
          <Label htmlFor="description" className="text-lg">
            Plant Description
          </Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter plant description"
            required
            className="p-3 border border-muted rounded-md"
          />
        </div>

        {/* Plant Type */}
        <div className="grid gap-3">
          <Label htmlFor="type" className="text-lg">
            Plant Type
          </Label>
          <Select
            id="type"
            name="type"
            value={formData.type}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, type: value }))
            }
            required
            className="border border-muted rounded-md"
          >
            <SelectTrigger>
              <span>Select plant type</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indoor">Indoor</SelectItem>
              <SelectItem value="outdoor">Outdoor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Plant Area */}
        <div className="grid gap-3">
          <Label htmlFor="area" className="text-lg">
            Plant Area
          </Label>
          <Input
            id="area"
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Enter plant area"
            required
            className="p-3 border border-muted rounded-md"
          />
        </div>

        {/* Plant Photo */}
        <div className="grid gap-3">
          <Label htmlFor="photo" className="text-lg">
            Upload Plant Photo
          </Label>
          <FileInput
            id="photo"
            name="photo"
            onChange={handleFileChange}
            accept="image/*"
            required
            className="p-3 border border-muted rounded-md"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full py-3 bg-primary hover:bg-primary-dark transition duration-300"
        >
          Add Plant
        </Button>
      </form>
    </div>
  );
}
