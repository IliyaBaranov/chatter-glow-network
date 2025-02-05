import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/utils/translations";

const Gallery = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const photos = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
  ].map(url => `${url}?auto=format&fit=crop&w=500&q=60`);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{t("photoGallery")}</h1>
      <div className="masonry-grid">
        {photos.map((photo, index) => (
          <Card key={index} className="mb-4 overflow-hidden">
            <img
              src={photo}
              alt={`Gallery photo ${index + 1}`}
              className="w-full h-auto object-cover transition-transform hover:scale-105"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;