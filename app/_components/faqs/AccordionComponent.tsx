import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionComponent() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {Array.from({ length: 5 }).map((_, index) => (
                <AccordionItem key={index} value={index.toString()} className="gap-2">
                    <AccordionTrigger className="text-gray-600">Can you work while studying in the United States??</AccordionTrigger>
                    <AccordionContent className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reiciendis cum atque laborum iusto quaerat, odit officiis ipsum, deleniti rerum sint blanditiis! Ad corporis officia mollitia consequuntur quos pariatur voluptas.
                    </AccordionContent>
                </AccordionItem>
            )
            )}

        </Accordion>
    )
}
