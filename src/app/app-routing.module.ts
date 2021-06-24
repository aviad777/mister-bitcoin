import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactDetailPageComponent } from "./pages/contact-detail-page/contact-detail-page.component";
import { ContactEditPageComponent } from "./pages/contact-edit-page/contact-edit-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";
import { ContactResolverService } from "./services/contact-resolver.service";

const routes: Routes = [
    {
        path: 'contact/:id', component: ContactDetailPageComponent, resolve: { contact: ContactResolverService }, children: [
            { path: 'edit', component: ContactEditPageComponent, resolve: { contact: ContactResolverService }, }
        ]

    },
    {
        path: 'signup', component: SignUpPageComponent,

    },
    {
        // this resolver gets contact by id or give contact without id depends if there is ID in the params
        path: 'contacts', component: ContactPageComponent, children: [
            { path: 'edit', component: ContactEditPageComponent, resolve: { contact: ContactResolverService }, }
        ]
    },
    {
        path: '', component: HomePageComponent
    }
];

@NgModule({
    // use hash is needed for app to work on git pages
    // paramsInheritanceStrategy: "always" is for children of route can access parent params freely
    imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: "always" })],
    exports: [RouterModule]
})

export class AppRoutingModule { }