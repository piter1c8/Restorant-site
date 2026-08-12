import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { faqItems } from "@/data/siteData";

export function FAQSection() { return <section id="faq" className="py-20"><div className="container px-4"><div className="mx-auto max-w-3xl"><div className="mb-10 text-center"><Badge variant="outline">Частые вопросы</Badge><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Ответы на популярные вопросы</h2><p className="mt-3 text-muted-foreground">Не нашли ответа? Позвоните нам — проконсультируем.</p></div><Accordion type="single" collapsible className="rounded-xl border px-5">{faqItems.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger className="text-left">{question}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></div></section>; }
