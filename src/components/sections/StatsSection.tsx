import { CalendarDays, Headphones, Smile, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [["12 000+", "Ремонтов выполнено", Wrench], ["8 лет", "На рынке", CalendarDays], ["98%", "Довольных клиентов", Smile], ["24/7", "Поддержка", Headphones]] as const;

export function StatsSection() { return <section className="border-y bg-muted/30"><div className="container grid grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4">{stats.map(([value, label, Icon]) => <Card key={label} className="border-0 bg-transparent shadow-none"><CardContent className="flex flex-col items-center gap-2 p-3 text-center"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><strong className="text-2xl">{value}</strong><span className="text-sm text-muted-foreground">{label}</span></CardContent></Card>)}</div></section>; }
