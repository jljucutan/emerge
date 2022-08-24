/**
 * CHANGE LOGS
 * 12/05/2019 | jjucutan | created initial version ref SERVICES-39675
 */
const loadOfferLetter = function() {
    "use strict";
    const markup = $('#markup').html('');

    // applicable to all section
    markup.append(
        $('<div class="offerClause"/>').append(
            $('<h5 class="text-center"/>').append(
                $('<strong/>').append(
                    'Non-Competition, Non-Solicitation and Confidentiality Agreement'
                )
            ),
            $('<p class="text-indented text-justify"/>').append(
                'I, the undersigned, in consideration of the commencement of my at-will employment or continued at-will employment and in exchange for being allowed access to and benefit from the Company’s Protectable Business Interests (as defined below), which I acknowledge are good and valuable consideration, do hereby agree as follows:'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '1.	I am employed by Gentiva Health Services, Inc. or one of its subsidiaries or affiliated companies (“Company”). I acknowledge the Company is engaged in the highly competitive business of post acute healthcare services across the United States, including providing home healthcare and hospice services.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '2.	The Company has substantial relationships with acute-care hospitals and other healthcare facilities, physicians and other healthcare professionals and patient referral sources, and employees (the "Company\'s Business Relationships").'
            )
        )
    );

    // Alabama state
    (offerLetterData.workLocation == "AL") &&
    markup.append(
        $('<div class="offerClause"/>').append(
            $('<p class="text-indented text-justify"/>').append(
                '3.	The Company’s highly specialized business requires and will continue to require the expenditure of substantial amounts of time, money and resources, and the use of skills, knowledge and expertise developed over a long period of time. As a result, the Company and its affiliates (collectively and individually “Kindred at Home") have developed and will continue to develop certain confidential and proprietary information that is unique and valuable to its business. Kindred at Home’s confidential and proprietary business information is all information which derives independent economic value from not being generally known outside Kindred at Home and belongs to, is used by, or is in its possession, including, but not necessarily limited to, trade secrets, the Company’s Business Relationships, proprietary information concerning or related to Kindred at Home’s operations, contractors, business and marketing strategies,  financial and reimbursement data, procedural manuals, training manuals, testing procedures, existing and potential contracts, suppliers, vendors, and business opportunities, such as customer lists, patient/client lists, national account lists, vendor lists, supplier lists, human resources information obtained from a confidential source (such as internal evaluations of the performance, capability and potential of any current or former employee of Kindred at Home), discharge planner identification lists, marketing plans, facility development plans, patient care systems/plans, quality improvement methodologies/plans, medical records and patient information (collectively the “Company’s Confidential Information”). The Company’s Confidential Information does not include any information that is in the public domain by appropriate means, but shall include non-public compilations, combinations or analyses of otherwise public information. The Company’s Confidential Information does not include information lawfully acquired by a non-supervisory employee about wages, hours or other terms and conditions of non-supervisory employees if used by them for purposes protected by Section 7 of the National Labor Relations Act (“NLRA”), such as joining or forming a union, engaging in collective bargaining, or engaging in other concerted activity for their mutual aid or protection. The Company’s Confidential Information also does not include this Non- Competition, Non-Solicitation and Confidentiality Agreement or any provision thereof.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '4.	The Company has established and maintains goodwill in connection with the Company\'s Business Relationships associated with the Company\'s marketing throughout the United States (the "Company\'s Goodwill"). I recognize and acknowledge that the Company’s Goodwill is built upon and dependent upon the confidence of the Company’s patients, residents, clients, referral sources, employees, independent contractors (including medical directors), vendors and partners and that goodwill arising out of my acquaintances with patients, residents, clients, referral sources, employees, independent contractors (including medical directors), vendors and partners shall be the sole and exclusive property of the Company.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '5.	I acknowledge that the Company\'s Business Relationships, the Company\'s Confidential Information, and the Company\'s Goodwill (collectively, the "Company\'s Protectable Business Interests") are valuable, protectable interests of the Company.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                $('<strong/>').append(
                    '6.	Protectable Business Interests and the Company’s Confidential Information.'
                )
            ),
            $('<ul/>').append(
                $('<p class="text-indented text-justify">').append(
                    'a.	I acknowledge that the Company’s Protectable Business Interests are valuable assets that greatly affect the successful conduct of the business of the Company and I agree to use my best efforts to safeguard and to further the Company’s Protectable Business Interests. I acknowledge that the Company’s Confidential Information is the exclusive property of the Company, is material and private, and I further acknowledge that the Company has exercised substantial efforts and enacted appropriate procedures to preserve the secrecy of the Company’s Confidential Information. During  my employment and thereafter, I agree to use the Company’s Confidential Information only for the benefit of the Company and shall not, other than on behalf of the Company, divulge or make use of any of the Company’s Confidential Information directly, indirectly, personally, or on behalf of any other person, business, corporation or entity. I shall not remove materials, including electronic materials containing the Company’s Confidential Information from the Company.  I shall immediately upon termination of  my employment for any reason or at any other time the Company so requests, deliver to the Company all Company property, including, but not limited to, petty cash, checks, materials or documents in any form (such as electronic, software, records, reports, data, memoranda, notes, models or drafts), including materials or documents containing the Company’s Confidential Information (such as correspondences, contracts, lists, manuals and marketing collateral and materials) and equipment of any nature, prepared or acquired in the course of my employment which are in my possession or control, except for documents regarding my individual compensation, such as pay stubs and benefit plan booklets. If any of the Company’s Confidential Information is stored on a hard drive or other electronic storage device that I own, I agree to copy all files containing the Company’s Confidential Information onto a storage device to be given to the Company and to permanently delete the Company’s Confidential Information from my hard drive or other electronic storage device. Where required by applicable law to be enforceable, the restrictions on use or disclosure of the Company’s Confidential Information will only apply for three (3) years after the end of my employment, where information that does not qualify as a trade secret is concerned; however, the restrictions will continue to apply to trade secret information for as long as the information at issue remains qualified as a trade secret.'
                ),
                $('<p class="text-indented text-justify">').append(
                    'b.	I understand, agree and acknowledge that nothing contained in this Agreement, including but not limited to Paragraph 6 (Protectable Business Interests and the Company’s Confidential Information) will prevent me from filing a charge or complaint with, reporting possible violations of any law or regulation, making disclosures to, and/or participating in any investigation or proceeding conducted by, the National Labor Relations Board, Equal Employment Opportunity Commission, the Securities and Exchange Commission, and/or any governmental authority charged with the enforcement of any laws. I am hereby provided notice that under the 2016 Defend Trade Secrets Act (DTSA): (1) no individual will be held criminally or civilly liable under Federal or State trade secret law for the disclosure of a trade secret (as defined in the Economic Espionage Act) that: (A) is made in confidence to a Federal, State, or local government official, either directly or indirectly, or to an attorney; and made solely for the purpose of reporting or investigating a suspected violation of law; or, (B) is made in a complaint or other document filed in a lawsuit or other proceeding, if such filing is made under seal so that it is not made public; and, (2) an individual who pursues a lawsuit for retaliation by an employer for reporting a suspected violation of the law may disclose the trade secret to the attorney of the individual and use the trade secret information in the court proceeding, if the individual files any document contain the trade secret under seal, and does not disclose the trade secret, except as permitted by court order.'
                )
            ),
            $('<p class="text-indented text-justify"/>').append(
                $('<strong/>').append('7.	Protective Covenants.')
            ),
            $('<ul/>').append(
                $('<p class="text-indent text-justify"/>').append(
                    'a.	During my employment and the Restricted Period (defined below), I shall not, within a radius of fifty (50) miles from any and all Company office(s) where I was employed, and/or over which I supervised, during the last year of employment, directly or indirectly, as an owner, manager, contractor, consultant, or employee, provide services to a business which competes with the Company, where such services are the same or similar in kind or function to the services I provided the Company during the last year of employment or are likely to result in the use or disclosure of the Company’s Confidential Information. In addition to the above, if I held an executive position (Vice President or above) with the Company at the time of termination, during my employment and the Restricted Period, I further agree not to perform or provide any services which are the same or similar in kind or function to the services provided by me within the last year of my employment with the Company to any individual or business which is engaged in the marketing, promoting or providing of products or services that are similar in kind or function to those provided by the Company such that they displace the products and services provided by the Company. The foregoing sentence is limited to those geographical areas in which the Company marketed its products and services during the last year of my employment.'
                ),
                $('<p class="text-indent text-justify"/>').append(
                    'b.	During my employment and the Restricted Period (defined below), I will not solicit, divert or take away or attempt to solicit, divert or take away any referral source, client, patient, resident, independent contractor (including medical director) or employee of Kindred at Home with whom I had contact or about whom I gained the Company’s Confidential Information during the last year of my employment in any manner detrimental to the interests of Kindred at Home (such as by encouraging such referral source, client, patient, resident, independent contractor or employee to terminate a business relationship with Kindred at Home or to associate or do business with a competing business). This provision does not preclude conduct protected by Section 7 of the NLRA such as joining or forming a union, engaging in collective bargaining, or engaging in other concerted activity for mutual aid and protection.'
                ),
                $('<p class="text-indent text-justify"/>').append(
                    'c.	Furthermore, during the Restricted Period, I shall not make any public statement or announcement or permit anyone else to make any public statement or announcement that I was formerly employed by or connected with Kindred at Home for purposes of marketing my skills and/or experience on behalf of a competing company.'
                ),
                $('<p class="text-indent text-justify"/>').append(
                    'd.	I agree and acknowledge that the geographic boundaries, scope of prohibited activities and time duration are reasonable in nature and no broader than are necessary to protect the Company’s Protectable Business Interests and further acknowledge that violation of these covenants would cause substantial and irreparable harm to the Company.'
                ),
                $('<p class="text-indent text-justify"/>').append(
                    'e.	I further acknowledge that nothing in the preceding restrictions is intended to prohibit me from engaging in conduct that is authorized as part of my job duties for the Company and undertaken for the Company’s benefit.'
                )
            ),
            $('<p class="text-indented text-justify"/>').append(
                '8.	',
                $('<strong/>').append('Restricted Period.'),
                ' The “Restricted Period” means a period of nine (9) months following the termination of my employment with the Company, whether initiated by the Company or me, unless a court of competent jurisdiction determines that period is unenforceable under applicable law because it is too long, in which case the Restricted Period will be for the longest of the following periods that the court determines is reasonable under  the  circumstances: eight (8) months, seven (7) months, or six (6) months following the termination of my employment with the Company.  I agree that if I violate any of the restrictions contained  in Paragraph 7, to the extent permitted by law, the Restrictive Period shall be increased by the period of time from the commencement of any such violation until the time such violation shall be cured by me; or, in the event the Company seeks judicial enforcement of this Agreement, for  a period of nine (9) months from the date of any court order enforcing this Agreement.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '9.	',
                $('<strong/>').append('Injunction and Remedies.'),
                ' I agree that if I take any action that is prohibited in Paragraphs 6 or 7 of this Agreement, the Company will suffer irreparable harm, for which money damages cannot fully compensate the Company. I agree that temporary and permanent injunctions are appropriate remedies for a breach or threatened breach of Paragraphs 6 or 7 of this Agreement, with One Thousand Dollars ($1,000.00) being the agreed-upon amount of bond (if any) that need be posted to secure such relief, and that these remedies shall be in addition to, and not in limitation of, any other rights or remedies to which the Company is or may be entitled. I further agree that should the Company be compelled to commence legal action against me because I did not comply with Paragraphs 6, or 7 of this Agreement, to the extent permitted by law, the Company shall be entitled to an award of attorneys’ fees and costs, through and including any appeal(s).'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '10. ',
                $('<strong/>').append('Reasonableness of Restrictions.'),
                ' I have carefully read and considered Paragraphs 6, 7, 8 and 9, and agree that they are fair, reasonable and reasonably required to protect the Company’s Protectable Business Interests. I further agree that in view of the special, unique, and intellectual services that I perform for the Company, which places me in a position of confidence and trust with the Company and the Company’s Business Relationships and which provide me with access to the Company’s Confidential Information and in view of the nature of the Company’s unique and specialized business, I expressly agree that the enforcement of the restrictions and provisions in Paragraphs 6, 7, 8 and 9 of this Agreement will not prevent me from earning a livelihood. I also agree that the terms of this Agreement are not inconsistent with any contractual obligations I have to any third party.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '11. ',
                $('<strong/>').append('No Defense.'),
                ' I agree that the covenants contained in Paragraphs 6 and 7 of this Agreement shall be construed as an agreement independent of any other provision in this Agreement and the existence of any claim or cause of action I may have against the Company, whether predicated on this Agreement or otherwise, shall not constitute a defense to the enforcement by the Company of the covenants contained in Paragraphs 6 and 7 of this Agreement.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '12. ',
                $('<strong/>').append('Inventions, Ideas, Discoveries.'),
                ' The Company shall have complete title to, and I shall not be entitled to any additional compensation from the Company for the following “Covered Inventions”:'
            ),
            $('<ul/>').append(
                $('<p class="text-indented text-justify"/>').append(
                    'a.	any invention or improvement, whether or not patentable, relating in any way to the business of the Company or to the services, materials, procedures or methods of the Company, that I make or reduce to practice while employed by the Company; or'
                ),
                $('<p class="text-indented text-justify"/>').append(
                    'b.	any idea, information or conception (whether or not constituting the Company’s Confidential Information) that I devise for or suggest for use by the Company while employed by the Company.'
                )
            ),
            $('<p class="text-justify"/>').append(
                'I hereby assign my rights to Covered Inventions to the Company. I agree to take whatever action is necessary (during or after employment) to give the Company the full benefit of this assignment.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '13. ',
                $('<strong/>').append('Entire Agreement.'),
                ' This Agreement contains all of the agreements, conditions and understandings between the Company and me regarding confidential information, non- solicitation of employees and business relationships, and non-competition with the Company, and supersedes all prior and contemporaneous understandings or conditions on the subject matter. However, I understand and agree that I am subject to the policies and procedures contained in the Employee Handbook, the Code of Conduct and other Company policies.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '14. ',
                $('<strong/>').append('Employment-at-Will.'),
                ' I acknowledge and agree that I am an employee-at-will and nothing in this Agreement shall be construed to grant any right to continuing employment on any terms or for any period of time. Either the Company or I may terminate my employment at any time with or without cause.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '15. ',
                $('<strong/>').append('Survival.'),
                ' This Agreement shall continue in effect during my employment with the Company and shall remain in effect following the termination of my employment.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '16. ',
                $('<strong/>').append('Successors and Assigns.'),
                ' I understand my obligations under this Agreement shall not be assignable by me, although the Company shall have the right to freely assign this Agreement, with or without my further consent and without notice to me. I understand that if I transfer within Kindred at Home, this Agreement is automatically assigned to the entity to which I transfer. This Agreement is intended to benefit the Company’s successors and assigns and shall be enforceable by the Company and its successors and assigns.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '17. ',
                $('<strong/>').append('Amendment/ No Waiver.'),
                ' No amendment of this Agreement shall be valid unless it is in writing and is signed by the Company and me, or is by order of a court of competent jurisdiction. Such an amendment shall only be applicable to the specific instance to which it relates and shall not be deemed to be a continuing or future waiver.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '18. ',
                $('<strong/>').append('Severability.'),
                ' I agree that should any provision or portion of a provision of this Agreement be declared illegal or unenforceable by any court of competent jurisdiction, that the provision or portion of the provision will be considered modified so as to make the provision or portion of the provision enforceable, and to the extent that the provision or portion of the provision cannot be made enforceable, this Agreement shall be considered divisible as to such provision or portion, which shall become null and void, leaving the remainder of this Agreement in full force and effect.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '19. ',
                $('<strong/>').append('Governing Law.'),
                ' This Agreement shall be construed in accordance with the laws of the state of Alabama without regard to its conflict of law provisions.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '20. ',
                $('<strong/>').append('Changes During Employment.'),
                ' The terms and conditions of this Agreement shall survive any changes made in the future to my employment, including, but not limited to, changes in salary, benefits, bonus plans, job title and job responsibilities.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '21. ',
                $('<strong/>').append('Future Employment Opportunities.'),
                ' At any time during my employment, and for nine (9) months after the termination of my employment for any reason, I agree to inform any prospective employer of the covenants stated in this Agreement, and upon accepting any employment with another company, will provide the Company with my new employer’s name and a description of the services I will provide to such other company. Further, I hereby specifically authorize the Company to disclose this Agreement to any future or potential future employer of mine and agree that I will not assert that the Company’s doing so constitutes actionable interference.'
            ),
            $('<p class="text-indented text-justify"/>').append(
                '22. ',
                $('<strong/>').append('Preservation of Duties and Obligations Under the Law.'),
                ' I understand  and agree that nothing in this Agreement eliminates, reduces, or otherwise removes any legal duties or obligations that I would otherwise have to the Company through common law or statute (including, without limitation, any law or statute protecting trade secrets).'
            )
        )
        
    );
}

angular.element(document).ready(function() {
    angular.element('#divLoader').remove();
});

$(document).on('ready', function() {
    // load the offer letter
    loadOfferLetter();

    if (strFormCompleted != "") { 
        //Create an array of info to pass to complete the offer letter 
        //0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML. 
        const arrParts = [ 
            [1,'hidden_pg1']
        ]; 
        //Send (ID of the div to hide,ID of the div to show,Parts to get the offer letter) 
        showCompletedOfferLetter('incomplete','complete',arrParts); 
    } else { 
        //If the offer letter is not complete
        // makeOfferLetter('hidden_pg1', 'offerClause');
    }

    // form is ready
    $(".modal").hide();
});
