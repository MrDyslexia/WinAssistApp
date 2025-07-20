import { Badge, Button } from "@heroui/react";
import { ExternalLink, ShoppingCart, Star } from "lucide-react";

// Componente para respuestas de texto simple
export function TextResponse({
  content,
}: {
  readonly content: { readonly text: string };
}) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-sm leading-relaxed">{content.text}</p>
    </div>
  );
}

// Componente para respuestas con imagen
export function ImageResponse({
  content,
}: {
  readonly content: {
    readonly text: string;
    readonly imageUrl: string;
    readonly caption: string;
  };
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm">{content.text}</p>
      <div className="bg-gray-50 p-2 rounded-lg">
        <h1 className="text-sm font-medium mb-2">{content.text}</h1>
        <p className="text-xs text-gray-600 mt-2">{content.caption}</p>
      </div>
    </div>
  );
}

// Componente para respuestas con enlaces
export function LinksResponse({
  content,
}: {
  readonly content: {
    readonly text: string;
    readonly links: ReadonlyArray<{
      readonly title: string;
      readonly url: string;
      readonly description: string;
    }>;
  };
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm">{content.text}</p>
      <div className="space-y-2">
        {content.links.map((link, _index) => (
          <div
            key={link.url}
            className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-blue-600">
                  {link.title}
                </h4>
                <p className="text-xs text-gray-600 mt-1">{link.description}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente para respuestas con productos
export function ProductsResponse({
  content,
}: {
  readonly content: {
    readonly text: string;
    readonly products: ReadonlyArray<{
      readonly name: string;
      readonly price: string;
      readonly image: string;
      readonly rating: number;
      readonly url: string;
      readonly specs: ReadonlyArray<string>;
    }>;
  };
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm">{content.text}</p>
      <div className="space-y-3">
        {content.products.map((product) => (
          <div key={product.name} className="bg-gray-50 p-3 rounded-lg">
            <div className="flex gap-3">
              <img
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
                src={product.image || "/placeholder.svg"}
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h4 className="text-sm font-medium">{product.name}</h4>
                  <span className="text-sm font-bold text-green-600">
                    {product.price}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-600">
                    {product.rating}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {product.specs.map((spec) => (
                    <Badge
                      key={`${product.name}-${spec}`}
                      className="text-xs"
                      variant="flat"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
                <Button className="mt-2 h-7 text-xs" size="sm">
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  View Product
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente para respuestas de clima
export function WeatherResponse({
  content,
}: {
  readonly content: {
    readonly location: string;
    readonly temperature: string;
    readonly condition: string;
    readonly humidity: string;
    readonly windSpeed: string;
    readonly icon: string;
  };
}) {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{content.location}</h3>
          <p className="text-3xl font-bold">{content.temperature}</p>
          <p className="text-sm opacity-90">{content.condition}</p>
        </div>
        <div className="text-right">
          <div className="text-4xl mb-2">{content.icon}</div>
          <p className="text-xs opacity-75">Humidity: {content.humidity}</p>
          <p className="text-xs opacity-75">Wind: {content.windSpeed}</p>
        </div>
      </div>
    </div>
  );
}
