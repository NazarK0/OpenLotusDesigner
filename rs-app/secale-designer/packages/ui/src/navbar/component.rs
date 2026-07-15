use dioxus::prelude::*;

const STYLE: Asset = asset!("./style.scss");

#[component]
pub fn Navbar(children: Element) -> Element {
    rsx! {
        document::Link { rel: "stylesheet", href: STYLE }

        div { class: "Navbar-component", {children} }
    }
}