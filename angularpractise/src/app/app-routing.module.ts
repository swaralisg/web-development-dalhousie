import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogComponent } from './blog/blog.component';
import { FeedbackComponent } from './feedback/feedback.component';



const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "signup", component: SignupComponent },
  { path: "blog", component: BlogComponent },
  { path: "feedback", component: FeedbackComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
