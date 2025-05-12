import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select";
import { FileInput } from "@/components/ui/file-input";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sooner"; // Optional for success/failure feedback

interface Plant {
  id: number;
  name: string;
  description: string;
  type: string;
  area: string;
  photo: string;
}

export default function HomePage() {
  const [plants, setPlants] = useState<Plant[]>([
    {
      id: 1,
      name: "Rose",
      description: "A beautiful red flower.",
      type: "Outdoor",
      area: "Garden",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Tulip",
      description: "A spring flower.",
      type: "Outdoor",
      area: "Park",
      photo: "https://via.placeholder.com/150",
    },
  ]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentPlant, setCurrentPlant] = useState<Plant | null>(null);

  const handleAddPlant = () => {
    setEditMode(false);
    setCurrentPlant(null);
  };

  const handleEditPlant = (plant: Plant) => {
    setEditMode(true);
    setCurrentPlant(plant);
  };

  const handleDeletePlant = (id: number) => {
    setPlants(plants.filter((plant) => plant.id !== id));
    toast({ title: "Plant deleted", description: "The plant has been removed." });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPlant) return;

    if (editMode) {
      setPlants(plants.map((plant) => (plant.id === currentPlant.id ? currentPlant : plant)));
    } else {
      setPlants([...plants, { ...currentPlant, id: plants.length + 1 }]);
    }
    setEditMode(false);
    setCurrentPlant(null);
    toast({ title: "Plant added/updated", description: "Your plant data has been saved." });
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-semibold text-center mb-6 text-primary">Plant List</h1>

      <Button onClick={handleAddPlant} className="mb-4 w-full py-3 bg-primary text-white shadow-md hover:shadow-lg transition-all">
        Add Plant
      </Button>

      {/* List of Plants */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plants.map((plant) => (
          <Card key={plant.id} className="p-4 flex flex-col gap-4 border rounded-lg shadow-md hover:shadow-lg transition-all">
            <img src={plant.photo} alt={plant.name} className="rounded-md w-full h-40 object-cover" />
            <div className="flex flex-col gap-2">
              <Label className="text-lg font-bold text-primary">{plant.name}</Label>
              <p className="text-sm ">{plant.description}</p>
              <p className="text-sm ">Area: {plant.area}</p>
              <div className="flex gap-4 mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => handleEditPlant(plant)} className="flex-1">
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>Edit Plant</DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Plant Name</Label>
                        <Input
                          id="name"
                          type="text"
                          value={currentPlant?.name || ""}
                          onChange={(e) => setCurrentPlant({ ...currentPlant, name: e.target.value })}
                          placeholder="Enter plant name"
                          required
                        />
                      </div>

                      <div className="grid gap-3">
                        <Label htmlFor="description">Plant Description</Label>
                        <Textarea
                          id="description"
                          value={currentPlant?.description || ""}
                          onChange={(e) => setCurrentPlant({ ...currentPlant, description: e.target.value })}
                          placeholder="Enter plant description"
                          required
                        />
                      </div>

                      <div className="grid gap-3">
                        <Label htmlFor="type">Plant Type</Label>
                        <Select
                          id="type"
                          value={currentPlant?.type || ""}
                          onChange={(value) => setCurrentPlant({ ...currentPlant, type: value })}
                          required
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

                      <div className="grid gap-3">
                        <Label htmlFor="area">Plant Area</Label>
                        <Input
                          id="area"
                          type="text"
                          value={currentPlant?.area || ""}
                          onChange={(e) => setCurrentPlant({ ...currentPlant, area: e.target.value })}
                          placeholder="Enter plant area"
                          required
                        />
                      </div>

                      <div className="grid gap-3">
                        <Label htmlFor="photo">Upload Plant Photo</Label>
                        <FileInput
                          id="photo"
                          onChange={(e) => {
                            const file = e.target.files ? e.target.files[0] : null;
                            setCurrentPlant({ ...currentPlant, photo: file ? URL.createObjectURL(file) : "" });
                          }}
                          accept="image/*"
                          required
                        />
                      </div>

                      <DialogFooter>
                        <Button type="submit" className="w-full py-3 bg-primary text-white">
                          {editMode ? "Update Plant" : "Add Plant"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" onClick={() => handleDeletePlant(plant.id)} className="flex-1">
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
