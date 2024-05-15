
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import JMATBBLogo from "@/components/logo";

export default function IndexPage() {
	return (
		<DefaultLayout>

			<section style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
				<JMATBBLogo />
				<div style={{ display: "flex", textAlign: "center", justifyContent: "center", flexDirection: "column" }}>
					<h4 className={subtitle({ class: "mt-5" })}>
						SINCE 2006
					</h4>
					<br />
				</div>
			</section>
		</DefaultLayout>
	);
}
