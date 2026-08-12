import { useEffect, useState } from "react";
import { Menu, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/data/siteData";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? "bg-background/95 shadow-sm backdrop-blur" : "bg-background/80 backdrop-blur"}`}><div className="container flex h-16 items-center justify-between px-4"><a href="#top" className="flex items-center gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Wrench className="h-5 w-5" /></span><span className="font-bold tracking-tight">{siteConfig.name}</span></a><nav className="hidden items-center gap-1 lg:flex">{navLinks.map((link) => <a key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground">{link.label}</a>)}</nav><div className="hidden items-center gap-3 lg:flex"><a href={siteConfig.phoneHref} className="flex items-center gap-2 text-sm font-medium"><Phone className="h-4 w-4 text-primary" />{siteConfig.phone}</a><Button asChild size="sm"><a href="#booking">Записаться</a></Button></div><Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden"><Menu className="h-5 w-5" /></Button></SheetTrigger><SheetContent><SheetTitle>Меню</SheetTitle><nav className="mt-6 grid gap-1">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-muted-foreground hover:bg-muted hover:text-foreground">{link.label}</a>)}</nav><Button asChild className="mt-6 w-full"><a href={siteConfig.phoneHref}><Phone className="h-4 w-4" />{siteConfig.phone}</a></Button></SheetContent></Sheet></div></header>;
}
