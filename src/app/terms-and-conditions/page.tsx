"use client";

import LegalLayout from "@/components/ui/LegalLayout";

export default function TermsAndConditions() {
    return (
        <LegalLayout title="Terms and Conditions" lastUpdated="March 2026">
            <section>
                <h2>1. Introduction and Acceptance of Terms</h2>
                <p>
                    Welcome to AxoSoul ("Company", "we", "our", or "us"). These Terms and Conditions constitute a legally binding agreement between you ("Client", "User", or "you") and AxoSoul, a digital product development agency headquartered in Tenkasi, Tamil Nadu, India.
                </p>
                <p>
                    By accessing our website, requesting a quote, entering into a project agreement, or using any of our services, you unconditionally agree to be bound by these Terms. If you do not agree with any part of these Terms, you must immediately cease using our website and services.
                </p>
            </section>

            <section>
                <h2>2. Services Offered</h2>
                <p>
                    AxoSoul provides custom digital product development services, including but not limited to Website Development, Mobile Application Development, UI/UX Design, Custom Software Development, and AI Integration. Every client project is custom-built from scratch — we do not use pre-made templates.
                </p>
            </section>

            <section>
                <h2>3. Project Engagement Process</h2>
                <p>Any project follows a structured process includes Inquiry, Discovery, Proposal/SOW, Agreement, Development, and Delivery. A project commences only upon receipt of the agreed initial milestone payment.</p>
            </section>

            <section id="refund-policy">
                <h2>5.6 Refund Policy</h2>
                <ul>
                    <li><strong>Milestone Structure:</strong> We operate exclusively on a milestone-based payment structure. No full upfront payment is required.</li>
                    <li><strong>Pricing:</strong> Final pricing is determined by the specific project scope as defined in the SOW.</li>
                    <li><strong>Late Payments:</strong> We reserve the right to suspend development work if payment is not received within 14 days of the invoice due date.</li>
                    <li><strong>Refunds:</strong> Milestone payments for approved and delivered work are non-refundable.</li>
                </ul>
            </section>

            <section>
                <h2>5. Intellectual Property and Code Ownership</h2>
                <p>
                    Upon receipt of all payments due for a completed project, AxoSoul assigns to the Client full and complete ownership of all custom Deliverables created specifically for that project, including source code and design files.
                </p>
                <p>
                    AxoSoul retains ownership of its pre-existing intellectual property, internal libraries, and boilerplate code. Clients receive a perpetual, non-exclusive license to use any such pre-existing IP integrated into their Deliverables.
                </p>
            </section>

            <section>
                <h2>6. Maintenance and Support</h2>
                <p>
                    Every project includes a <strong>complimentary 6-month technical maintenance period</strong> commencing from the date of project delivery. This covers bug fixes for issues arising from AxoSoul's original code and minor security updates.
                </p>
            </section>

            <section>
                <h2>7. Confidentiality</h2>
                <p>
                    Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project engagement. This obligation survives the termination of the project for a period of three (3) years.
                </p>
            </section>

            <section>
                <h2>8. Limitation of Liability</h2>
                <p>
                    AxoSoul's total aggregate liability arising out of or in connection with the Services shall not exceed the total amount actually paid by the Client to AxoSoul for the specific project giving rise to the claim.
                </p>
            </section>

            <section>
                <h2>9. Governing Law</h2>
                <p>
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Tenkasi, Tamil Nadu, India.
                </p>
            </section>

            <section>
                <h2>10. Contact Information</h2>
                <p>For any questions regarding these Terms and Conditions, please contact us at:</p>
                <p><strong>Email:</strong> hello@axosoul.in</p>
                <p><strong>WhatsApp:</strong> +91 8610381533</p>
            </section>
        </LegalLayout>
    );
}
