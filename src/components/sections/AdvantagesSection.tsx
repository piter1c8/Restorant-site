import { BadgeCheck, Clock3, Headphones, ShieldCheck, Truck, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { advantages } from "@/data/siteData";

const icons = { ShieldCheck, Clock3, BadgeCheck, Wallet, Truck, Headphones };
export function AdvantagesSection() { return <section id="advantages" className="bg-slate-950 py-20 text-white"><div className="container grid gap-10 px-4 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><Badge className="border-white/15 bg-white/10 text-cyan-100">Почему ТехноРемонт</Badge><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Сервис, которому доверяют технику и время</h2><p className="mt-4 text-slate-300">Сначала показываем причину неисправности, затем называем точную цену. Вы всегда знаете, что происходит с устройством.</p><Button variant="outline" className="mt-7 border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-950" asChild><a href="#process">Как мы работаем</a></Button></div><div className="grid gap-4 sm:grid-cols-2">{advantages.map((item) => { const Icon = icons[item.icon as keyof typeof icons]; return <Card key={item.title} className="border-white/10 bg-white/5 text-white transition hover:bg-white/10"><CardContent className="p-5"><Icon className="mb-4 h-6 w-6 text-cyan-300" /><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p></CardContent></Card>; })}</div></div></section>; }
