"use client"
import PrivacyPage from "./PrivacyPage";
import TermsPage from "./TermsPage";
import CookiePolicyPage from './CookiePolicyPage';

export default function AllPolicy() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
     
     <TermsPage/>
     <PrivacyPage/>
     <CookiePolicyPage />
    </div>
  );
}
