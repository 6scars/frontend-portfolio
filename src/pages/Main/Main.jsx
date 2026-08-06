import { ExternalAbout } from "./ExternalAbout";
import { ExternalHomeSection } from "./ExternalHomeSection";
import { ExternalTechnical } from "./ExternalTechnical";

export function Main() {
    return (
        <main className="w-full">
            <ExternalHomeSection />
            <ExternalAbout />
            <ExternalTechnical/>
        </main>
    )
}