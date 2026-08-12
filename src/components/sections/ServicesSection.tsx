import { useState } from "react";
import * as Icons from "lucide-react";
import { ArrowRight, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services } from "@/data/siteData";

type Service = (typeof services)[number];
type Icon = React.ComponentType<{ className?: string }>;

export function ServicesSection() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Service | null>(null);
  const visible = filter === "all" ? services : filter === "computer" ? services.filter((item) => ["pc", "upgrade", "network"].includes(item.id)) : services.filter((item) => ["laptop", "data", "board"].includes(item.id));
  return <section id="services" className="py-20"><div className="container px-4"><div className="mx-auto mb-8 max-w-2xl text-center"><Badge variant="outline" className="mb-3">Наши услуги</Badge><h2 className="text-3xl font-bold sm:text-4xl">Починим. Настроим. Улучшим.</h2><p className="mt-3 text-muted-foreground">От простой чистки до сложного компонентного ремонта.</p></div><Tabs value={filter} onValueChange={setFilter} className="mb-8 flex justify-center"><TabsList><TabsTrigger value="all">Все услуги</TabsTrigger><TabsTrigger value="computer">Компьютеры</TabsTrigger><TabsTrigger value="laptop">Ноутбуки и данные</TabsTrigger></TabsList></Tabs><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visible.map((service) => { const ServiceIcon = ((Icons as unknown) as Record<string, Icon>)[service.icon] ?? Icons.Wrench; return <Card key={service.id} className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"><div className="relative overflow-hidden"><img src={service.image} alt={service.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" /><span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-card/90 text-primary"><ServiceIcon className="h-5 w-5" /></span></div><CardHeader className="pb-3"><div className="flex justify-between gap-3"><CardTitle className="text-lg">{service.title}</CardTitle><Badge variant="secondary">{service.price}</Badge></div><p className="text-sm text-muted-foreground">{service.description}</p></CardHeader><CardContent><p className="flex items-center gap-2 text-xs text-muted-foreground"><Clock3 className="h-4 w-4" />Обычно {service.duration}</p></CardContent><CardFooter><Button variant="ghost" className="w-full justify-between" onClick={() => setSelected(service)}>Подробнее <ArrowRight className="h-4 w-4" /></Button></CardFooter></Card>; })}</div></div><Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}><DialogContent><DialogHeader><DialogTitle>{selected?.title}</DialogTitle><DialogDescription>{selected?.description}</DialogDescription></DialogHeader><ul className="grid gap-2 text-sm text-muted-foreground">{selected?.features.map((feature) => <li key={feature} className="flex gap-2"><Icons.Check className="h-4 w-4 text-green-600" />{feature}</li>)}</ul><Button asChild><a href="#booking" onClick={() => setSelected(null)}>Записаться на ремонт <ArrowRight className="h-4 w-4" /></a></Button></DialogContent></Dialog></section>;
}
