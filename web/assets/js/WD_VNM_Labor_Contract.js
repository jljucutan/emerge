// Labor Contract
function fnView() {
    $("#markup").html("").append(
        // Company Logo
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
                $('<div id="srt_eform_logo" class="text-right"/>').html('<img src=' + company.Logo + '>'),
                $('<p/>').html(' '),
                $('<p/>').html(' ')
            )
        ),
        // OfferClause 1
        $('<div/>').append(
            $('<div class="offerClause text-right"/>').append(
                $('<span/>').append(
                    $('<p class="text-right"/>').html(
                        fnConvertFullDate2(new Date())
                    )
                 )
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="center"/>').html('<strong>HỢP ĐỒNG LAO ÐỘNG</strong>'),
            $('<p class="center"/>').html('LABOUR CONTRACT')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>Chúng tôi, một bên là:</strong> ' + employee.Vietnam_Entity_Code),
            $('<p/>').html('<strong><em>We are, from the one side:</strong> ' + employee.Vietnam_Entity_Value + '</em>')
        ),
        (employee.Vietnam_Work_Location_Code == 'Hanoi') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('- Ðịa chỉ: Phòng 419-423 và 425, Hanoi Press Club số 4-6/F, 59A Lý Thái Tổ Phường Tràng Tiền, Quận Hoàn Kiếm Thành phố Hà Nội, Việt Nam.')
        ),
        (employee.Vietnam_Work_Location_Code == 'Ho Chi Minh City') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('- Ðịa chỉ: Lầu 9, Toà nhà Đức, #33 Lê Duẩn, Phường Bến nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.')
        ),
        (employee.Vietnam_Work_Location_Code == 'Hanoi') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>Address: Units 419-423 and 425, Hanoi Press Club No. 4-6/F, 59A Ly Thai To Street Trang Tien Ward, Hoan Kiem District Hanoi, Vietnam.</em>')
        ),
        (employee.Vietnam_Work_Location_Code == 'Ho Chi Minh City') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>Address: Level 9, Deutsches Haus 33 Le Duan Boulevard, Ben Nghe Ward District #1, Hochiminh City, Vietnam.</em>')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('- Ðại diện bởi: Parul Dewan'),
            $('<p/>').html('<em>Represented by: Parul Dewan</em> '),
            $('<p/>').html('- Chức vụ: Quản Lý Nhân Sự Cao Cấp'),
            $('<p/>').html('<em>Position: HR Senior Manager</em> ')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<u>Theo Giấy Ủy Quyền ngày 23 tháng 1 năm 2019 của Tổng Giám Đốc</u> '),
            $('<p/>').html('<em><u>According to the Power of Attorney issued on 23 January 2019 by the General Director</em></u> '),
            $('<p/>').html('(Sau đây được gọi là “<strong>Công Ty</strong>”)'),
            $('<p/>').html('<em>(Hereinafter referred to as the “<strong>Company</strong>”)</em> ')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('Và một bên là Ông/Bà: ' + employee.First_Name + ' ' + employee.Last_Name),
            $('<p/>').html('<em>And from the other side: ' + employee.First_Name + ' ' + employee.Last_Name + '</em>'),
            $('<p/>').html('- Quốc tịch: ' + employee.Nationality_Description),
            $('<p/>').html('<em>Nationality: ' + employee.Nationality_Description + '</em>'),
            $('<p/>').html('- Ngày tháng năm sinh: ' + fnConvertDate(employee.DOB)),
            $('<p/>').html('<em>Date of birth: ' + fnConvertDate(employee.DOB) + '</em>'),
            $('<p/>').html('- Ðịa chỉ thường trú: ' + ((employee.Address_1 != '')? employee.Address_1 + ', ':'') + ((employee.Address_2 != '')? employee.Address_2 + ', ':'') + ((employee.City != '')? employee.City + ', ':'') + ((employee.Zip != '')? employee.Zip + ', ':'') + ((employee.Country != '')? employee.Country:'')),
            $('<p/>').html('<em>Permanent address:: ' + ((employee.Address_1 != '')? employee.Address_1 + ', ':'') + ((employee.Address_2 != '')? employee.Address_2 + ', ':' ') + ((employee.City != '')? employee.City + ', ':'') + ((employee.Zip != '')? employee.Zip + ', ':'') + ((employee.Country != '')? employee.Country:'') + '</em>'),
            $('<p/>').html('- CMND/ Hộ chiếu số: ' + employee.ID_Passport),
            $('<p/>').html('<em>ID/Passport number: ' + employee.ID_Passport + '</em>')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>-- Số giấy phép lao động: ' + employee.Work_Permit_number + '</em>'),
            $('<p/>').html('- Work permit No: ' + employee.Work_Permit_number),
            $('<p/>').html('+ cấp ngày: ' + fnConvertDate(employee.ID_Issue_Date)),
            $('<p/>').html('<em>+ date of issuance: ' + fnConvertDate(employee.ID_Issue_Date) + '</em>'),
            $('<p/>').html('+ cấp bởi: Department of Labor, Invalids and Social Affairs'),
            $('<p/>').html('<em>+ issued by: Department of Labor, Invalids and Social Affairs</em>')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH' && employee.Vietnam_Work_Location_Code == 'Ho Chi Minh City') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('+ tại: Ho Chi Minh city  ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH' && employee.Vietnam_Work_Location_Code == 'Hanoi') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('+ tại: Hanoi ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH' && employee.Vietnam_Work_Location_Code == 'Ho Chi Minh City') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>+ at: Ho Chi Minh city </em> ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH' && employee.Vietnam_Work_Location_Code == 'Hanoi') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>+ at: Hanoi </em>')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('(Sau đây được gọi là “<strong>Người Lao Ðộng</strong>”) '),
            $('<p/>').html('<em>(Hereinafter referred to as the “<strong>Employee</strong>”)</em> '),
            $('<p/>').html('(Sau đây, mỗi bên được gọi là “<strong>Bên</strong>”, các bên được gọi là “<strong>các Bên</strong>”) '),
            $('<p/>').html('<em>(Hereinafter referred to individually as a “<strong>Party</strong>” and together as the “<strong>Parties</strong>”)</em> '),
            $('<p/>').html('Dựa trên cơ sở thông tin các Bên đã cung cấp đầy đủ theo quy định tại Điều 19 Bộ luật Lao động, các Bên thỏa thuận ký kết hợp đồng này (sau đây được gọi là “<strong>Hợp Đồng</strong>”) và cam kết làm đúng những điều khoản sau:  '),
            $('<p/>').html('<em>Pursuant to the information that both Parties have fully provided to each other in accordance with Article 19 of the Labour Code, both Parties agree to sign this contract (hereinafter referred to as the “<strong>Contract</strong>”) and undertake to comply with the following provisions:</em> ')
        ),
        $('<div class="offerClause">').append(
            $('<p class="center"/>').html('<strong>ĐIỀU 1: THÔNG TIN CUNG CẤP BỞI CÁC BÊN </strong>'),
            $('<p class="center"/>').html('<strong>ARTICLE 1: INFORMATION PROVIDED BY THE PARTIES</strong>')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>1.  Cam kết của Người Lao Động</strong> '),
            $('<p/>').html('Người Lao Động cam kết và đảm bảo rằng: '),
            $('<ul/>').append(
                $('<li/>').html('Người Lao Động có đầy đủ kinh nghiệm và trình độ học vấn cần thiết để có thể đảm nhiệm công việc và chấp nhận toàn bộ trách nhiệm được giao. Công Ty đã mời làm việc và giao kết Hợp Đồng này dựa trên những thông tin do Người Lao Động cung cấp về trình độ học vấn và kinh nghiệm của Người Lao Động. Nếu Người Lao Động bị phát hiện cố ý cung cấp những thông tin sai lệch mà dựa vào đó Công Ty ký kết Hợp Đồng này, Người Lao Động có thể bị xử lý kỷ luật và Hợp Đồng này sẽ được sẽ được giải quyết theo luật hiện hành; và'),
                $('<li/>').html('Người Lao Động được tuyển dụng trên cơ sở hiểu rõ rằng không có sự cản trở hoặc hạn chế nào đối với quan hệ lao động của Người Lao Động và Công Ty. Công Ty bảo lưu quyền xem xét bất kỳ sự cản trở nào như vậy là nguyên nhân cho việc chấm dứt quan hệ lao động. ')
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<em><strong>Employees’s Representations<em></strong> '),
            $('<p/>').html('The Employee represents and warrants that:'),
            $('<ul/>').append(
                $('<li/>').html('<em>The Employee has the necessary education and experience to be able to fulfill the duties and to accept the entire responsibilities of the functions assigned to the Employee. The Company has made the offer of employment and entered into this Contract based on the information provided by the Employee on the Employee’s education and experience. If the Employee is found to have intentionally given the wrong information on which the Company has relied to enter into this Contract, the Employee may be disciplined and the Contract will be resolved in accordance with applicable law; and</em>'),
                $('<li/>').html('<em>The Employee is hired on the explicit understanding that there are no bars or restrictions upon the Employee’s employment with the Company. The Company reserves the right to consider any such impediments to be a cause for termination of employment.</em>')
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>2.  Nghĩa vụ cung cấp thông tin của Công Ty:</strong> '),
            $('<p/>').html('Người Lao Động qua đây thừa nhận rằng Công Ty đã cung cấp thông tin cho Người Lao Động về công việc, địa điểm làm việc, điều kiện làm việc, thời giờ làm việc, thời giờ nghỉ ngơi, an toàn lao động, vệ sinh lao động, tiền lương, hình thức trả lương, bảo hiểm xã hội, y tế và thất nghiệp, quy định về bảo vệ bí mật kinh doanh, bí mật công nghệ; và Người Lao Động không còn bất kỳ yêu cầu cung cấp thông tin nào khác. ')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<em><strong>Responsibility to provide information of the Company:<em></strong> '),
            $('<p/>').html('<em>The Employee hereby acknowledges that the Company has provided the Employee with the information on the job, working locations, working conditions, working time, rest time, labor safety and hygiene, salary, payment method, social, health, and unemployment insurances, regulations on confidentiality of trade secrets and technological secret; and the Employee does not request any other information from the Company.</em> ')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>3.  Dữ liệu và thông tin cá nhân:</strong> '),
            $('<p/>').html('Người Lao Động xác nhận và thỏa thuận như sau: '),
            $('<ul/>').append(
                $('<li/>').html('Cho mục đích xác minh thông tin được cung cấp trong sơ yếu lý lịch hoặc bảng ghi thông tin cá nhân của Người Lao Động, hoặc bất kỳ thông tin nào khác liên quan đến trình độ, kinh nghiệm hoặc khả năng chuyên môn trong công việc của Người Lao Động, và nói một cách tổng quát hơn là việc thực hiện các hoạt động nghề nghiệp chuyên môn của Người Lao Động, quan hệ lao động của Người Lao Động với Công Ty và / hoặc hoạt động kinh doanh của Công Ty, thông tin và dữ liệu cá nhân của Người Lao Động có thể được Công Ty thu thập, sử dụng, lưu trữ và chuyển giao.'),
                $('<li/>').html('Công Ty có thể thu thập thông tin và dữ liệu cá nhân của Người Lao Động từ các tài liệu và thông tin mà Người Lao Động tự cung cấp cho Công Ty hoặc từ các nguồn thông tin khác. Cho mục đích kê khai, tính toán và trả thuế thu nhập cá nhân, hoặc các mục đích khác, Người Lao Động đồng ý thông báo cho những người (chủ yếu là các thành viên trong gia đình của Người Lao Động) mà Người Lao Động cung cấp thông tin và dữ liệu cá nhân của họ cho Công Ty về việc cung cấp thông tin và dữ liệu này, và có được sự đồng ý rõ ràng của họ (với điều kiện là họ có đủ thẩm quyền để đồng ý theo luật) về việc thu thập, sử dụng, lưu trữ và chuyển giao thông tin và dữ liệu đó bởi Công Ty. Công Ty sẽ không chịu trách nhiệm cho việc Người Lao Động không tuân thủ pháp luật của Việt Nam về quyền riêng tư liên quan đến việc thu thập, sử dụng, lưu trữ và chuyển giao thông tin và dữ liệu cá nhân của những người đó. Người Lao Động đồng ý bồi hoàn và giữ cho Công Ty không phải chịu trách nhiệm và không chịu thiệt hại về bất kỳ và tất cả những việc không tuân thủ pháp luật Việt Nam của Người Lao Động về quyền riêng tư.'),
                $('<li/>').html('Các thông tin và dữ liệu cá nhân của Người Lao Động được lưu trữ tại hệ thống dữ liệu của Công Ty hoặc Công Ty Liên Kết  hoặc các bên thứ ba dưới dạng dữ liệu điện tử hoặc các hình thức khác phù hợp với mục đích sử dụng, ví dụ như trên giấy. Thông tin và dữ liệu cá nhân của Người Lao Động sẽ được lưu trữ trong khoảng thời gian ít nhất bằng thời hạn quy định của pháp luật hoặc vĩnh viễn. '),
                $('<li/>').html('Cho mục đích của Hợp Đồng này, <strong>“Công Ty Liên Kết”</strong> nghĩa là bất kỳ thực thể nào mà (trực tiếp hay gián tiếp) kiểm soát, được kiểm soát bởi, hoặc cùng được kiểm soát với Công Ty. "Kiểm soát" (bao gồm cả ý nghĩa tương quan của các thuật ngữ "kiểm soát", "được kiểm soát bởi" và "cùng được kiểm soát với") như được áp dụng cho Công Ty, nghĩa là sự trực tiếp hoặc gián tiếp nắm giữ quyền chỉ đạo việc quản lý và các chính sách của Công Ty, dù thông qua việc sở hữu chứng khoán có quyền biểu quyết, bằng hợp đồng hay cách khác. '),
                $('<li/>').html('Công Ty có thể chuyển giao hoặc trao đổi dữ liệu và thông tin cá nhân của Người Lao Động mà Công Ty nắm giữ cho bất kỳ Công Ty Liên Kết nào và/hoặc các bên thứ ba để sử dụng phù hợp với các mục đích được nêu trên đây hoặc các mục đích khác mà Công Ty coi là cần thiết đối với hoạt động của Công Ty.')
            ),
            $('<p/>').html(' '),
            $('<p/>').html('Ngoài ra, Người Lao Động hiểu rằng Người Lao Động có thể yêu cầu Công Ty thay đổi thông tin và dữ liệu cá nhân của Người Lao Động (tức là những thông tin để có thể xác định được cá nhân đó) bằng việc liên lạc với Bộ Phận Nhân Sự của Công Ty. ')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<em><strong>Personal Data and Information:<em></strong> '),
            $('<p/>').html('<em>The Employee acknowledges and agrees on the following: <em>'),
            $('<ul/>').append(
                $('<li/>').html('<em>For the purpose of verifying information provided in the Employee’s resume or personal information sheet, or any other information related to the Employee’s job qualifications, experience or expertise, and more generally the exercise of the Employee’s professional activities, employment relationship with the Company and the business of the Company, the Employee’s personal data and information may be collected, used, stored and transferred by the Company.</em> '),
                $('<li/>').html('<em>The Company may collect the Employee’s personal data and information via documents and information that the Employee provides to the Company himself/herself or via other sources. For the purpose of personal income tax’s declaration, calculation and payment or other purposes, the Employee agrees to inform persons (who are mainly the Employee’s family members) whose personal data and information the Employee provides to the Company about this provision, and to obtain their explicit consent (provided they are legally competent to give consent) for the collection, use, storage and transfer of that personal data and information by the Company. The Company shall not be responsible for the Employee’s failure to comply with Vietnamese privacy laws related to the collection, use, storage and transfer of that person’s personal data and information. The Employee agrees to indemnify and hold the Company harmless and unaccountable for any and all of the Employee’s failure to comply with Vietnamese privacy laws.</em> '),
                $('<li/>').html('<em>The Employee’s personal data and information are stored at the data system of the Company or Affiliates or third parties in the digital form or other forms appropriate for purpose of use, such as on paper. The Employee’s personal data and information will be stored at least for statutory durations as required by law or permanently.</em> '),
                $('<li/>').html('<em>For the purpose of this Contract, <strong>“Affiliate”</strong> means any entity which (directly or indirectly) controls, is controlled by and/or under common control with the Company. "Control" (including with correlative meanings, the terms "controls", "controlled by" and "under common control with") as applied to the Company, means the direct or indirect possession of the power to direct the management and policies of the Company, whether through the ownership of voting securities, by contract or otherwise.</em> '),
                $('<li/>').html('<em>The Company may transfer and/or communicate the Employee’s personal data and information held by the Company to any Affiliates and/or to third parties for their use aligned with the purposes mentioned above or for other purposes the Company considers as necessary for the Company’s operations.</em> ')
            ),
            $('<p/>').html(' '),
            $('<p/>').html('<em>Further, the Employee understands that the Employee may request the Company to make changes to the Employee’s personal data and information (which is the information enabling the identification of the individual) by contacting the HR Department of the Company. </em> ')
        ),
        $('<div class="offerClause">').append(
            $('<p class="center"/>').html('<strong>ÐIỀU 2: THỜI HẠN VÀ CÔNG VIỆC HỢP ÐỒNG </strong>'),
            $('<p class="center"/>').html('<strong>ARTICLE 2: DURATION AND JOB DESCRIPTION</strong>')
        ),
        (employee.Reason_Code != 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>1. Thử việc<strong> '),
            $('<p/>').html('Người Lao Động được yêu cầu thử việc trong vòng [60] ngày kể từ Ngày Bắt Đầu như được định nghĩa dưới đây. '),
            $('<p/>').html('Bất kỳ thời điểm nào trong thời gian thử việc, Công Ty có quyền chấm dứt Hợp Đồng này mà không cần báo trước và không phải bồi thường nếu việc làm thử không đạt yêu cầu mà các Bên đã thỏa thuận.'),
            $('<p/>').html('Ít nhất 3 ngày trước ngày kết thúc thời gian thử việc, Công Ty sẽ thông báo cho Người Lao Động đánh giá của Công Ty về việc thực hiện công việc của Người Lao Động trong thời gian thử việc.')
        ),
        (employee.Reason_Code != 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong><em>Probation</strong></em> '),
            $('<p/>').html('<em>The Employee is required to serve a probation of [60] days from the Date of Commencement as defined below. </em> '),
            $('<p/>').html('<em>At any time during the probation period, the Company has the right to terminate this Contract without any advance notice and compensation if the probation work does not satisfy the requirements as agreed by the Parties. </em> '),
            $('<p/>').html('<em>At least 3 days prior to the expiry date of the Employee’s probation period, the Company will notify the Employee on its assessment of the Employee’s performance during the probation.</em> ')
        ),
        (employee.Reason_Code != 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>2. Loại hợp đồng lao động:</strong> ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'Local' && employee.Reason_Code != 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('Hợp Ðồng này là hợp đồng lao động không xác định thời hạn với thời hạn kể từ Ngày Bắt Đầu được định nghĩa ở dưới đây.')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH' && employee.Reason_Code != 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('Hợp Đồng này là một hợp đồng xác định thời hạn có thời hạn là hai năm bắt đầu từ Ngày Bắt Đầu như được định nghĩa dưới đây. Hợp Đồng này phụ thuộc vào việc thực hiện công việc của Người Lao Động trong thời gian thử việc và hiệu lực và việc gia hạn của giấy phép lao động của Người Lao Động.')
        ),
        (employee.Reason_Code != 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong><em>Type of contract:</em></strong> ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'Local' && employee.Reason_Code != 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>This Contract is an indefinite term labor contract with a term from the Date of Commencement as defined below.</em>')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH' && employee.Reason_Code != 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>This Contract is a fixed term labor contract of the term equivalent to two years starting from the Date of Commencement as defined below. This Contract is subject to the Employee’s performance during the probation period and the validity and renewal of the Employee’s work permit. </em>')
        ),
        (employee.Reason_Code == 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>1. Loại hợp đồng lao động:<strong> ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'Local' && employee.Reason_Code == 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('Hợp Ðồng này là hợp đồng lao động không xác định thời hạn với thời hạn kể từ Ngày Bắt Đầu được định nghĩa ở dưới đây.')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH' && employee.Reason_Code == 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('Hợp Đồng này là một hợp đồng xác định thời hạn có thời hạn là hai năm bắt đầu từ Ngày Bắt Đầu như được định nghĩa dưới đây. Hợp Đồng này phụ thuộc vào việc thực hiện công việc của Người Lao Động trong thời gian thử việc và hiệu lực và việc gia hạn của giấy phép lao động của Người Lao Động. ')
        ),
        (employee.Reason_Code == 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong><em>Type of contract:</em></strong> ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'Local' && employee.Reason_Code == 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>This Contract is an indefinite term labor contract with a term from the Date of Commencement as defined below. </em>')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH' && employee.Reason_Code == 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>This Contract is a fixed term labor contract of the term equivalent to two years starting from the Date of Commencement as defined below. This Contract is subject to the validity and renewal of the Employee’s work permit. </em>')
        ),
        (employee.Reason_Code != 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>3. Ngày bắt đầu hợp đồng lao động:</strong> ')
        ),
        (employee.Reason_Code == 'Transfer') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>2. Ngày bắt đầu hợp đồng lao động:</strong> ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'Local') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('Hợp Đồng này có hiệu lực từ ngày ' + fnConvertFullDate3(employee.Start_Date) + ' (“<strong>Ngày Bắt Đầu</strong>”). ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('Hợp Đồng này có hiệu lực từ ngày ' + fnConvertFullDate3(employee.Start_Date) + ' (“<strong>Ngày Bắt Đầu</strong>”), phụ thuộc vào hiệu lực và việc gia hạn giấy phép lao động của Người Lao Động. ')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong><em>Date of commencement of the labour contract:</em></strong> ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'Local') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>This Contract shall be effective from ' + fnConvertFullDate3(employee.Start_Date) + ' (the “<strong>Date of Commencement</strong>”).</em>')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>This Contract shall be effective from ' + fnConvertFullDate3(employee.Start_Date) + ' (the “<strong>Date of Commencement</strong>”), subject to the validity and renewal of the Employee’s work permit. </em> ')
        ),
        $('<div class="offerClause">').append(
            (employee.Reason_Code != 'Transfer') &&
            $('<p/>').html('<strong>4. Ðịa điểm làm việc</strong> '),
            (employee.Reason_Code == 'Transfer') &&
            $('<p/>').html('<strong>3. Ðịa điểm làm việc</strong> '),
            $('<p/>').html('Ðịa điểm làm việc chính và thường xuyên của Người Lao Ðộng là trụ sở chính của Công Ty tại Việt Nam. Người Lao Ðộng đồng ý là Người Lao Ðộng có thể được thuyên chuyển tới một địa điểm làm việc khác của Công Ty theo nhu cầu hoạt động của Công Ty. '),
            $('<p/>').html('Do bản chất công việc và trách nhiệm của Người Lao Ðộng, Người Lao Ðộng có thể được yêu cầu đi công tác trong lãnh thổ Việt Nam cũng như tới các quốc gia khác và làm việc tại địa điểm của các đối tác kinh doanh tùy vào từng thời điểm. '),
            $('<p/>').html('<strong>Work location:</strong> '),
            $('<p/>').html('The Employee’s main and regular work location shall be the Company’s head office in Vietnam. The Employee agrees to a possible reassignment to another location of the Company in accordance with operational needs of the Company. '),
            $('<p/>').html('Due to the Employee’s work and responsibility, the Employee may, from time to time, be required to go on business trips within the territory of Vietnam as well as to other countries and work at the locations of business partners. ')
        ),
        $('<div class="offerClause">').append(
            (employee.Reason_Code != 'Transfer') &&
            $('<p/>').html('<strong>5. Nhiệm vụ công việc:</strong> '),
            (employee.Reason_Code == 'Transfer') &&
            $('<p/>').html('<strong>4. Nhiệm vụ công việc:</strong> '),
            $('<p/>').html('Người Lao Ðộng làm việc theo bản mô tả công việc mà Công Ty quy định cùng với các sửa đổi, bổ sung vào từng thời điểm (nếu có). '),
            $('<p/>').html('<strong></strong> '),
            $('<p/>').html('<strong>Job responsibilities: </strong>'),
            $('<p/>').html('The Employee will engage in work in accordance with the Job Description prescribed by the Company, together with all amendments and supplements thereof from time to time (if any). ')
        ),
        $('<div class="offerClause">').append(
            $('<p class="center"/>').html('<strong>ÐIỀU 3: CHẾ ÐỘ LÀM VIỆC</strong>'),
            $('<p class="center"/>').html('<strong>ARTICLE 3: WORKING REGIME</strong>')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>1. Thời giờ làm việc:</strong> '),
            $('<p/>').html('Thời giờ làm việc bình thường được quy định theo ngày, tức là 8 giờ một ngày và 40 giờ một tuần '),
            $('<p/>').html('Ngày làm việc bình thường là từ thứ Hai đến thứ Sáu mỗi tuần. '),
            $('<p/>').html('Nếu Người Lao Động cần làm việc ngoài thời giờ làm việc bình thường nêu trên, Người Lao Động phải nhận được chỉ thị hoặc phê duyệt bằng văn bản của người quản lý.  '),
            $('<p/>').html('Thời gian bắt đầu và kết thúc chính xác của một ngày làm việc thông thường sẽ tuân theo giờ hoạt động của địa điểm làm việc mà Người Lao Động được bố trí làm việc tại đó, hoặc theo quy định tại nội quy lao động của Công Ty. '),
            $('<p/>').html('Công Ty sẽ cố gắng đảm bảo rằng Người Lao Động có lịch làm việc và giờ nghỉ có tính ổn định cao trong từng thời kỳ. '),
            $('<p/>').html('Người Lao Động hoàn toàn hiểu và đồng ý rằng tùy theo yêu cầu của công việc và tình hình nhân sự, Công Ty có thể điều chỉnh lịch làm việc theo từng thời kỳ và thông báo trước cho Người Lao Động.'),
            $('<p/>').html('<strong><em>Working time:</em></strong> '),    
            $('<p/>').html('<em>The normal working hours are provided on a daily basis: i.e. eight (8) hours a day, and 40 hours a week.</em>'),    
            $('<p/>').html('<em>If the Employee needs to work overtime above the normal working hours provided above, the Employee shall obtain the manager’s instruction or approval as documented in writing. </em>'),    
            $('<p/>').html('<em>The exact starting and ending time of a normal working day will be in accordance with the operating hours of the work location or department that the Employee is assigned to or that is prescribed under the internal labour regulations of the Company. </em>'),    
            $('<p/>').html('<em>The normal working days are from Monday to Friday every week.</em>'),    
            $('<p/>').html('<em>The Company will make its best efforts to ensure that the Employee has the most stable working schedule and break time from time to time. </em>'),    
            $('<p/>').html('<em>The Employee fully understands and agrees that subject to work requirements and human resource status, the Company can adjust the working schedule from time to time and will notify the Employee in advance.</em>')

        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>2. Dụng cụ làm việc được cấp:</strong> '),
            $('<p/>').html('Người Lao Động sẽ được cung cấp bàn làm việc, văn phòng phẩm và các dụng cụ khác cần thiết theo từng thời điểm để thực hiện công việc của mình một cách có hiệu quả. '),
            $('<p/>').html('Người Lao Động có trách nhiệm phải bảo quản và giữ gìn tài sản được giao như tài sản của chính mình. Nếu có hư hỏng hay mất mát gì thì Người Lao Động phải báo ngay cho Công Ty, và phụ thuộc vào tình huống cụ thể, có thể sẽ phải chịu trách nhiệm vật chất theo quy định của pháp luật về lao động. '),
            $('<p/>').html('<strong><em>Equipment to be provided:</em></strong> '),
            $('<p/>').html('<em>The Employee shall be provided with a desk, stationeries and other necessary items that may be required from time to time to perform the Employee’s duties effectively.</em> '),
            $('<p/>').html('<em>The Employee is responsible for protecting and preserving the assigned assets as if they were the Employee’s own ones. If there is any damage or loss, the Employee must immediately inform the Company, and depending on the circumstances, may be subject to material responsibilities in accordance with labour regulations.</em> ')
        ),
        $('<div class="offerClause">').append(
            $('<p class="center"/>').html('<strong>ÐIỀU 4: NGHĨA VỤ VÀ QUYỀN LỢI CỦA NGƯỜI LAO ÐỘNG </strong>'),
            $('<p class="center"/>').html('<strong>ARTICLE 4: OBLIGATIONS AND BENEFITS OF THE EMPLOYEE</strong>')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>1. Quyền lợi </strong> '),
            $('<p/>').html('<strong><em>Benefits</em></strong> '),
            $('<p/>').html('<strong>a. Mức lương, thưởng và phụ cấp</strong> '),
            $('<p/>').html('Base salary, bonus and allowances '),
            $('<p/>').html('<strong>(i) Mức lương và hình thức trả lương</strong> '),
            $('<p/>').html('Mức lương của Người Lao Động được trả theo tháng. '),
            $('<p/>').html('Mức lương tháng của Người Lao Động là ' + fnFormatCurrency(employee.Monthly_Salary) + ' Đồng Việt Nam. '),
            $('<p/>').html('Mức lương này là một khoản thu nhập gộp bao gồm (i) thuế thu nhập cá nhân (“<strong>Thuế TNCN</strong>”), (ii) bảo hiểm xã hội, bảo hiểm y tế mà Người Lao Động có nghĩa vụ phải đóng góp, và (iii) các khoản khấu trừ bắt buộc khác mà Người Lao Động có nghĩa vụ phải đóng theo quy định của pháp luật Việt Nam. '),
            $('<p/>').html('<strong><em>Base salary and form of salary payment</em></strong> '),
            $('<p/>').html('<em>The base salary of the Employee is paid on a monthly basis.</em> '),
            $('<p/>').html('<em>The employee’s monthly base salary shall be VND ' + fnFormatCurrency(employee.Monthly_Salary) + '.</em> '),
            $('<p/>').html('<em>This base salary is a gross income inclusive of (i) the amount of payable personal income tax (“<strong>PIT</strong>”), (ii) social insurance, unemployment insurance and health insurance that the Employee is obligated to contribute to, and (iii) any other compulsory deductible amount that the Employee is obliged to contribute in accordance with provisions of Vietnamese laws.</em> '),
            $('<p/>').html('<strong>(ii) Ngày trả lương</strong> '),
            $('<p/>').html('Mức lương được chi trả một lần một tháng không muộn hõn ngày làm việc cuối cùng của mỗi tháng dương lịch. '),
            $('<p/>').html('<strong><em>Date of payment:</em></strong> '),
            $('<p/>').html('<em>Base salary shall be paid once a month no later than the last business day of each calendar month.</em> '),
            $('<p/>').html('<strong>(iii) Chế độ xét nâng mức lương</strong> '),
            $('<p/>').html('Mức lương của Người Lao Ðộng sẽ được xem xét lại mỗi năm một lần căn cứ vào việc thực hiện công việc của Người Lao Động theo chính sách của Công Ty. Công Ty không có nghĩa vụ phải tăng mức lương sau mỗi lần xem xét. '),
            $('<p/>').html('<strong><em>Base salary increase review:</em></strong> '),
            $('<p/>').html('<em>The Employee’s base salary shall be reviewed once per year depending on the Employee’s performance according to the Company policy. The Company shall not be obliged to increase the base salary after each review.</em> '),
            $('<p/>').html('<strong>(iv) Tiền thưởng:</strong> '),
            $('<p/>').html('<strong><em>Bonus</em></strong> '),
            $('<p/>').html('<strong>Tiền thưởng:</strong> '),
            $('<p/>').html('Công Ty có thể, theo toàn quyền quyết định của Công Ty, trả cho Người Lao Động các khoản tiền thưởng có thể thay đổi, và không có tính định kỳ (sau đây gọi chung là “<strong>Tiền Thưởng</strong>”), tùy thuộc vào mức độ hoàn thành công việc và sự tuân thủ nội quy lao động của Người Lao Động, với điều kiện Người Lao Động vẫn đang làm việc cho Công Ty tại thời điểm trả Tiền Thưởng. Tiền Thưởng này chịu Thuế TNCN mà Người Lao Động phải đóng theo pháp luật Việt Nam. Công Ty bảo lưu quyền đơn phương sửa đổi hoặc chấm dứt bất kỳ Tiền Thưởng nào vào bất kỳ lúc nào. '),
            $('<p/>').html('<strong><em>Bonus</em></strong> '),
            $('<p/>').html('<em>The Company may, in its sole discretion, elect to pay to the Employee variable and non-recurrent bonuses (collectively referred to as “<strong>Bonuses</strong>”), subject to the performance and compliance with the internal labor regulation of the Employees, provided that the Employee’s remaining in continuous and employment with the Company as of the date Bonuses are paid. The Bonuses are subject to payable PIT of the Employee in accordance with Vietnamese laws. The Company reserves the right to unilaterally amend or discontinue any Bonuses at any time.</em> ')
        ),
        (employee.OTP_Amount_1 != '') && 
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>Thưởng ký hợp đồng</strong> '),
            $('<p/>').html('Người Lao Động sẽ đủ điều kiện nhận một khoản thưởng ký hợp đồng là ' + fnFormatCurrency(employee.OTP_Amount_1) + ' Đồng Việt Nam/  nếu Người Lao Động làm việc một cách tích cực cho Công Ty trong suốt 12 tháng kể từ Ngày Bắt Đầu. Công Ty sẽ trả trước cho Người Lao Động khoản thưởng này vào ngày trả mức lương đầu tiên sau Ngày Bắt Đầu. Trong trường hợp Người Lao Động đơn phương chấm dứt hợp đồng lao động trong thời gian 12 tháng kể từ Ngày Bắt Đầu, Người Lao Động có trách nhiệm hoàn trả toàn bộ hoặc một phần khoản thưởng này, tùy theo quyết định của riêng Công Ty. Người Lao Động qua đây đồng ý cho phép Công Ty khấu trừ bất kỳ khoản thưởng đã trả trước nhưng không được hưởng nào từ khoản thanh toán cuối cùng cho Người Lao Động. '),
            $('<p/>').html('<strong><em>Sign-On bonus</em></strong> '),
            $('<p/>').html('<em>The Employee will be eligible to receive a sign-on bonus of VND ' + fnFormatCurrency(employee.OTP_Amount_1) + ', if the Employee is actively employed by the Company for 12 months following the Date of Commencement. The Company will advance the Employee payment of this bonus in the regular cycle immediately following the Date of Commencement. Should the Employee unilaterally terminate the employment within 12 months from the Date of Commencement, the Employee will be responsible for reimbursing all or part of the bonus payment at the Company’s sole discretion. The Employee hereby authorizes the Company to deduct any unearned bonus advance from the final paycheck.</em> ')
        ),
        (employee.Commission_Plan == '60_40_Base_Target_Plan') &&
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<strong/>').text('Tiền hoa hồng')
            ),
            $('<p/>').append(
                'Khi được Apple phê duyệt, anh/chị sẽ tham gia Chương Trình Thù Lao Bán Hàng Apple Asia Pacific mà có thể trả khoản tiền hoa hồng mục tiêu bằng 40% của Thu Nhập Mục Tiêu (OTE). OTE của anh/chị là ',
                employee.OTE_Amount,
                ' VND một năm. Chương trình này, bao gồm cả sự chia tách giữa lương cơ bản và khoản hoa hồng thay đổi theo tỷ lệ 60:40, có thể được điều chỉnh. Các điều chỉnh này, nếu có, sẽ thuộc quyền tùy nghi quyết định của riêng Apple, và anh/chị đồng ý với điều đó qua việc chấp nhận thư mời này và sau này ký kết hợp đồng lao động. '
            ),
            $('<p/>').append(
                $('<strong/>').text('Commission')
            ),
            $('<p/>').append(
                'Upon Apple’s approval, you will participate in the Apple Asia Pacific Sales Compensation Plan which may pay a target commission of 40% on On-Target Earning (OTE). Your OTE will be VND ',
                employee.OTE_Amount,
                ' per annum. This plan, including the split between the base pay and variable commission of 60:40 ratio may be subject to change. These changes, if any, will be made at Apple’s absolute discretion to which you consent by accepting this offer and later signing the labor contract.'
            )
        ),
        (employee.Commission_Plan == '70_30_Base_Target_Plan') &&
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<strong/>').text('Tiền hoa hồng')
            ),
            $('<p/>').append(
                'Khi được Apple phê duyệt, anh/chị sẽ tham gia Chương Trình Thù Lao Bán Hàng Apple Asia Pacific mà có thể trả khoản tiền hoa hồng mục tiêu bằng 30% của Thu Nhập Mục Tiêu (OTE). OTE của anh/chị là ',
                employee.OTE_Amount,
                ' VND một năm. Chương trình này, bao gồm cả sự chia tách giữa lương cơ bản và khoản hoa hồng thay đổi theo tỷ lệ 70:30, có thể được điều chỉnh. Các điều chỉnh này, nếu có, sẽ thuộc quyền tùy nghi quyết định của riêng Apple, và anh/chị đồng ý với điều đó qua việc chấp nhận thư mời này và sau này ký kết hợp đồng lao động. '
            ),
            $('<p/>').append(
                $('<strong/>').text('Commission')
            ),
            $('<p/>').append(
                'Upon Apple’s approval, you will participate in the Apple Asia Pacific Sales Compensation Plan which may pay a target commission of 30% on On-Target Earning (OTE). Your OTE will be VND ',
                employee.OTE_Amount,
                ' per annum. This plan, including the split between the base pay and variable commission of 70:30 ratio may be subject to change. These changes, if any, will be made at Apple’s absolute discretion to which you consent by accepting this offer and later signing the labor contract.'
            )
        ),
        (employee.Commission_Plan == '80_20_Base_Target_Plan') &&
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<strong/>').text('Tiền hoa hồng')
            ),
            $('<p/>').append(
                'Khi được Apple phê duyệt, anh/chị sẽ tham gia Chương Trình Thù Lao Bán Hàng Apple Asia Pacific mà có thể trả khoản tiền hoa hồng mục tiêu bằng 20% của Thu Nhập Mục Tiêu (OTE). OTE của anh/chị là ',
                employee.OTE_Amount,
                ' VND một năm. Chương trình này, bao gồm cả sự chia tách giữa lương cơ bản và khoản hoa hồng thay đổi theo tỷ lệ 80:20, có thể được điều chỉnh. Các điều chỉnh này, nếu có, sẽ thuộc quyền tùy nghi quyết định của riêng Apple, và anh/chị đồng ý với điều đó qua việc chấp nhận thư mời này và sau này ký kết hợp đồng lao động.'
            ),
            $('<p/>').append(
                $('<strong/>').text('Commission')
            ),
            $('<p/>').append(
                'Upon Apple’s approval, you will participate in the Apple Asia Pacific Sales Compensation Plan which may pay a target commission of 20% on On-Target Earning (OTE). Your OTE will be VND ',
                employee.OTE_Amount,
                ' per annum. This plan, including the split between the base pay and variable commission of 80:20 ratio may be subject to change. These changes, if any, will be made at Apple’s absolute discretion to which you consent by accepting this offer and later signing the labor contract.  '
            )
        ),
        (employee.Location_Premium == 'Hanoi') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>Phụ Cấp Khu Vực </strong> '),
            $('<p/>').html('Apple sẽ, còn tùy thuộc vào việc anh/chị tiếp tục quan hệ lao động với Apple, trong khoản thời gian 2 năm kể từ khi bắt đầu thời hạn của giấy phép lao động đầu tiên của anh/ chị, cung cấp cho anh/chị một khoản Phụ Cấp Khu Vực ("Phụ Cấp Khu Vực"). Khoản Phụ Cấp Khu Vực hàng tháng bằng 20% Tiền Lýõng hàng tháng của anh/chị. Phụ Cấp Khu Vực sẽ ðýợc trả hàng tháng cùng với Tiền Lýõng, và chịu thuế thu nhập cá nhân. '),
            $('<p/>').html('Nếu hợp ðồng lao ðộng của anh/chị với Apple chấm dứt trong thời hạn của hợp ðồng lao ðộng, Phụ Cấp Khu Vực của tháng cuối cùng sẽ tính theo tỷ lệ. Nếu anh/chị ðýợc ðiều chuyển tới một ðịa phýõng khác trong thời hạn của hợp ðồng lao ðộng, Apple sẽ ngừng trả Phụ Cấp Khu Vực. Quyền hýởng Phụ Cấp Khu Vực của anh/chị tại một ðịa phýõng khác sẽ ðýợc xem xét và quyết ðịnh bởi Apple theo chính sách của Apple.  '),
            $('<p/>').html('Trong phạm vi pháp luật cho phép, Apple bảo lýu quyền ðýợc thay ðổi hoặc ngừng các ðiều khoản và ðiều kiện của ' + ((employee.Education_Allowance == 'Yes')? 'Phụ Cấp Giáo Dục':'') + ' và Phụ Cấp Khu Vực tại bất kỳ thời ðiểm nào, theo toàn quyền tùy nghi quyết ðịnh của mình.  '),
            $('<p/>').html('<strong><em>Location Premium</em></strong>  '),
            $('<p/>').html('<em>Apple will, subject to the continuance of your employment with Apple, for a period of two years from the commencement of the valid period of your first work permit, provide you with a Location Premium (the “Location Premium”). The monthly amount of Premium is 20% of your monthly Salary. The Location Premium will be paid on a monthly basis along with the Salary, and is subject to individual income tax. </em> '),
            $('<p/>').html('<em>If your employment is terminated with Apple within the term of employment, the Location Premium of the last month will be prorated. If you are relocated to another location within the term of employment, Apple will cease the payment of the Location Premium. Your eligibility to the Location Premium in another location will be reviewed and decided by Apple according to Apple’s policy. </em> '),
            $('<p/>').html('<em>To the extent permitted by law, Apple reserves the right, in its full discretion, to modify or cease the terms and conditions of the  ' + ((employee.Education_Allowance == 'Yes')? 'Education Allowance and':'') + ' Location Premium at any time. </em> ')
        ),
        (employee.Location_Premium == 'Ho Chi Minh City') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>Phụ Cấp Khu Vực </strong> '),
            $('<p/>').html('Apple sẽ, còn tùy thuộc vào việc anh/chị tiếp tục quan hệ lao động với Apple, trong khoản thời gian 2 năm kể từ khi bắt đầu thời hạn của giấy phép lao động đầu tiên của anh/ chị, cung cấp cho anh/chị một khoản Phụ Cấp Khu Vực ("Phụ Cấp Khu Vực"). Khoản Phụ Cấp Khu Vực hàng tháng bằng 15% Tiền Lýõng hàng tháng của anh/chị. Phụ Cấp Khu Vực sẽ ðýợc trả hàng tháng cùng với Tiền Lýõng, và chịu thuế thu nhập cá nhân.  '),
            $('<p/>').html('Nếu hợp ðồng lao ðộng của anh/chị với Apple chấm dứt trong thời hạn của hợp ðồng lao ðộng, Phụ Cấp Khu Vực của tháng cuối cùng sẽ tính theo tỷ lệ. Nếu anh/chị ðýợc ðiều chuyển tới một ðịa phýõng khác trong thời hạn của hợp ðồng lao ðộng, Apple sẽ ngừng trả Phụ Cấp Khu Vực. Quyền hýởng Phụ Cấp Khu Vực của anh/chị tại một ðịa phýõng khác sẽ ðýợc xem xét và quyết ðịnh bởi Apple theo chính sách của Apple. '),
            $('<p/>').html('Trong phạm vi pháp luật cho phép, Apple bảo lýu quyền ðýợc thay ðổi hoặc ngừng các ðiều khoản và ðiều kiện của  ' + ((employee.Education_Allowance == 'Yes')? 'Phụ Cấp Giáo Dục':'') + ' và Phụ Cấp Khu Vực tại bất kỳ thời ðiểm nào, theo toàn quyền tùy nghi quyết ðịnh của mình. '),
            $('<p/>').html('<strong><em>Location Premium</em></strong>  '),
            $('<p/>').html('<em>Apple will, subject to the continuance of your employment with Apple, for a period of two years from the commencement of the valid period of your first work permit, provide you with a Location Premium (the “Location Premium”). The monthly amount of Premium is 15% of your monthly Salary. The Location Premium will be paid on a monthly basis along with the Salary, and is subject to individual income tax. </em> '),
            $('<p/>').html('<em>If your employment is terminated with Apple within the term of employment, the Location Premium of the last month will be prorated. If you are relocated to another location within the term of employment, Apple will cease the payment of the Location Premium. Your eligibility to the Location Premium in another location will be reviewed and decided by Apple according to Apple’s policy. </em> '),
            $('<p/>').html('<em>To the extent permitted by law, Apple reserves the right, in its full discretion, to modify or cease the terms and conditions of the ' + ((employee.Education_Allowance == 'Yes')? 'Education Allowance and':'') + ' Location Premium at any time. </em> ')
        ),
        ((employee.Education_Allowance == 'Yes') && (employee.Vietnam_Work_Location_Code == 'Hanoi')) &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>Phụ Cấp Giáo Dục</strong> '),
            $('<p/>').html('Apple sẽ, còn tùy thuộc vào việc anh/chị tiếp tục quan hệ lao ðộng với Apple, trong khoản thời gian 3 năm kể từ khi bắt đầu thời hạn của giấy phép lao động đầu tiên của anh/ chị, cung cấp cho anh/chị một khoản phụ cấp giáo dục ("Phụ Cấp Giáo Dục") týõng ðýõng với 75% các khoản chi phí ðýợc chấp nhận (ðýợc ðịnh nghĩa dýới ðây) cho con của anh/chị nếu con của anh/chị học tập tại một trýờng quốc tế hoặc týõng tự tại Hà Nội. Phụ Cấp Giáo Dục của anh/chị ðýợc hỗ trợ bởi nhóm Ðiều Ðộng Nhân Tài của bộ phận nhân sự, cũng nhý bên thứ ba cung cấp dịch vụ ðiều chuyển. Chi phí ðýợc chấp nhận có nghĩa là phí ðãng ký, học phí, các chi phí cho sách giáo khoa, ðồng phục và xe buýt của trýờng học ðýa ðón học sinh dành cho con phụ thuộc của anh/chị. Phụ Cấp Giáo Dục chỉ áp dụng ðối với nãm học sau khi con của anh/chị ðủ 4 tuổi cho tới bậc ðại học (bậc ðại học không ðýợc bao gồm). Nếu lợi ích này chịu thuế ở quốc gia nõi anh/chị làm việc, tổng thuế sẽ ðýợc xác ðịnh theo thuế suất cãn cứ theo quy ðịnh của quốc gia ðó. Nếu anh/chị tự nguyện xin thôi việc hoặc bị chấm dứt hợp ðồng lao ðộng vì hành vi sai trái trong 12 tháng ðầu tiên kể từ Ngày Thực Tế Trả Phụ Cấp Giáo Dục, anh/chị ðồng ý hoàn trả cho Apple mọi khoản tiền ðýợc trả dýới dạng Phụ Cấp Giáo Dục. Nếu anh/chị tự nguyện xin thôi việc hoặc bị chấm dứt hợp ðồng lao ðộng vì hành vi sai trái trong 12 tháng tiếp theo sau 12 tháng ðầu tiên kể từ Ngày Thực Tế Trả Phụ Cấp Giáo Dục, anh/chị ðồng ý hoàn trả cho Apple số tiền theo tỷ lệ của toàn bộ Phụ Cấp Giáo Dục ðã ðýợc trả týõng ứng với số tháng còn lại trýớc ngày hết hạn 24 tháng. "Ngày Thực Tế Trả Phụ Cấp Giáo Dục" là ngày hoàn lại khoản Phụ Cấp Giáo Dục ðầu tiên cho anh/chị hoặc ngày bên thứ ba cung cấp dịch vụ ðiều chuyển của Apple thanh toán khoản Phụ Cấp Giáo Dục ðầu tiên cho trýờng học. Anh/chị ðồng ý và cho phép Apple khấu trừ số tiền còn nợ Apple từ khoản thanh toán cuối cùng khi chấm dứt hợp ðồng lao ðộng của anh/chị. Nếu khoản thanh toán cuối cùng khi chấm dứt hợp ðồng lao ðộng của anh/chị không ðủ ðể trả cho số tiền còn nợ nêu trên, thì anh/chị ðồng ý trả khoản chênh lệch còn lại trực tiếp cho Apple trong vòng 45 ngày dýõng lịch kể từ khi anh/chị chấm dứt hợp ðồng lao ðộng. '),
            $('<p/>').html('<strong><em>Education Allowance </em></strong>  '),
            $('<p/>').html('<em>Apple will, subject to the continuance of your employment with Apple, for a period of three years from the commencement of the valid period of your first work permit, provide you with an education allowance (“Education Allowance”) that is equivalent to 75% of the eligible expenses (as defined below) for your dependent child(ren) if they are enrolled at an international school or similar in Hanoi. Your Education Allowance will be supported by People Talent Mobility team, as well as Apple third party relocation service provider. Eligible expenses refer to registration fees, tuition fees, text book costs, uniform costs, and school shuttle bus fees for your dependent child(ren). The Education Allowance is only applicable to the school year after the child(ren) turn(s) 4 years old, till university level (university level is not included). If this benefit is taxable in your employment country, tax gross up will be provided at your employment country statutory tax rates. If you voluntarily resign or are terminated for misconduct within the first 12 months from the Actual Pay Date of the Education Allowance, you agree to repay Apple all amounts paid by way of this Education Allowance. If you voluntarily resign or are terminated for misconduct within the second 12 months from the Actual Pay Date of the Education Allowance, you agree to pay Apple a pro rata amount of all paid Education Allowance according to the months away from the expiration date of the 24 months. “Actual Pay Date of the Education Allowance” indicates the first reimbursement date of Education Allowance to you or first payment date of Education Allowance by Apple third party relocation service provider to the school. You agree and authorize Apple to deduct the amount owed to Apple from your final payment upon termination. If your final payment upon termination is not sufficient to cover the amount owed, you agree to pay the balance remaining directly to Apple within 45 calendar days of your termination.</em> ')
        ),
        ((employee.Education_Allowance == 'Yes') && (employee.Vietnam_Work_Location_Code == 'Ho Chi Minh City')) &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>Phụ Cấp Giáo Dục  </strong> '),
            $('<p/>').html('Apple sẽ, còn tùy thuộc vào việc anh/chị tiếp tục quan hệ lao ðộng với Apple, trong khoản thời gian 3 năm kể từ khi bắt đầu thời hạn của giấy phép lao động đầu tiên của anh/ chị, cung cấp cho anh/chị một khoản phụ cấp giáo dục ("Phụ Cấp Giáo Dục") týõng ðýõng với 75% các khoản chi phí ðýợc chấp nhận (ðýợc ðịnh nghĩa dýới ðây) cho con của anh/chị nếu con của anh/chị học tập tại một trýờng quốc tế hoặc týõng tự tại Thành phố Hồ Chí Minh. Phụ Cấp Giáo Dục của anh/chị ðýợc hỗ trợ bởi nhóm Ðiều Ðộng Nhân Tài của bộ phận nhân sự, cũng nhý bên thứ ba cung cấp dịch vụ ðiều chuyển. Chi phí ðýợc chấp nhận có nghĩa là phí ðãng ký, học phí, các chi phí cho sách giáo khoa, ðồng phục và xe buýt của trýờng học ðýa ðón học sinh dành cho con phụ thuộc của anh/chị. Phụ Cấp Giáo Dục chỉ áp dụng ðối với nãm học sau khi con của anh/chị ðủ 4 tuổi cho tới bậc ðại học (bậc ðại học không ðýợc bao gồm). Nếu lợi ích này chịu thuế ở quốc gia nõi anh/chị làm việc, tổng thuế sẽ ðýợc xác ðịnh theo thuế suất cãn cứ theo quy ðịnh của quốc gia ðó. Nếu anh/chị tự nguyện xin thôi việc hoặc bị chấm dứt hợp ðồng lao ðộng vì hành vi sai trái trong 12 tháng ðầu tiên kể từ Ngày Thực Tế Trả Phụ Cấp Giáo Dục, anh/chị ðồng ý hoàn trả cho Apple mọi khoản tiền ðýợc trả dýới dạng Phụ Cấp Giáo Dục. Nếu anh/chị tự nguyện xin thôi việc hoặc bị chấm dứt hợp ðồng lao ðộng vì hành vi sai trái trong 12 tháng tiếp theo sau 12 tháng ðầu tiên kể từ Ngày Thực Tế Trả Phụ Cấp Giáo Dục, anh/chị ðồng ý hoàn trả cho Apple số tiền theo tỷ lệ của toàn bộ Phụ Cấp Giáo Dục ðã ðýợc trả týõng ứng với số tháng còn lại trýớc ngày hết hạn 24 tháng. "Ngày Thực Tế Trả Phụ Cấp Giáo Dục" là ngày hoàn lại khoản Phụ Cấp Giáo Dục ðầu tiên cho anh/chị hoặc ngày bên thứ ba cung cấp dịch vụ ðiều chuyển của Apple thanh toán khoản Phụ Cấp Giáo Dục ðầu tiên cho trýờng học. Anh/chị ðồng ý và cho phép Apple khấu trừ số tiền còn nợ Apple từ khoản thanh toán cuối cùng khi chấm dứt hợp ðồng lao ðộng của anh/chị. Nếu khoản thanh toán cuối cùng khi chấm dứt hợp ðồng lao ðộng của anh/chị không ðủ ðể trả cho số tiền còn nợ nêu trên, thì anh/chị ðồng ý trả khoản chênh lệch còn lại trực tiếp cho Apple trong vòng 45 ngày dýõng lịch kể từ khi anh/chị chấm dứt hợp ðồng lao ðộng. '),
            $('<p/>').html('<strong><em>Education Allowance </em></strong>  '),
            $('<p/>').html('<em>Apple will, subject to the continuance of your employment with Apple, for a period of three years from the commencement of the valid period of your first work permit, provide you with an education allowance (“Education Allowance”) that is equivalent to 75% of the eligible expenses (as defined below) for your dependent child(ren) if they are enrolled at an international school or similar in Ho Chi Minh City. Your Education Allowance will be supported by People Talent Mobility team, as well as Apple third party relocation service provider. Eligible expenses refer to registration fees, tuition fees, text book costs, uniform costs, and school shuttle bus fees for your dependent child(ren). The Education Allowance is only applicable to the school year after the child(ren) turn(s) 4 years old, till university level (university level is not included). If this benefit is taxable in your employment country, tax gross up will be provided at your employment country statutory tax rates. If you voluntarily resign or are terminated for misconduct within the first 12 months from the Actual Pay Date of the Education Allowance, you agree to repay Apple all amounts paid by way of this Education Allowance. If you voluntarily resign or are terminated for misconduct within the second 12 months from the Actual Pay Date of the Education Allowance, you agree to pay Apple a pro rata amount of all paid Education Allowance according to the months away from the expiration date of the 24 months. “Actual Pay Date of the Education Allowance” indicates the first reimbursement date of Education Allowance to you or first payment date of Education Allowance by Apple third party relocation service provider to the school. You agree and authorize Apple to deduct the amount owed to Apple from your final payment upon termination. If your final payment upon termination is not sufficient to cover the amount owed, you agree to pay the balance remaining directly to Apple within 45 calendar days of your termination.</em> ')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>(v) Phụ cấp:</strong> '),
            $('<p/>').html('Theo chính sách của Công Ty. '),
            $('<p/>').html('<strong><em>Allowances:</em></strong> '),
            $('<p/>').html('<em>In accordance with the Company’s policy.</em> '),
            $('<p/>').html('<strong>(vi) Quyền lợi khác:</strong> '),
            $('<p/>').html('Theo chương trình phúc lợi của Công Ty, như được sửa đổi vào từng thời điểm theo toàn quyền quyết định của Công Ty. '),
            $('<p/>').html('<strong><em>Other Benefits:</em></strong> '),
            $('<p/>').html('<em>In accordance with the Company’s benefits program, as amended at the Company’s discretion from time to time.</em> '),
            $('<p/>').html('<strong>(vii) Hoàn trả:</strong> '),
            $('<p/>').html('Người Lao Động được yêu cầu Công Ty hoàn trả các khoản chi phí cho công việc theo chính sách của Công Ty. '),
            $('<p/>').html('<strong><em>Reimbursement:</em></strong> '),
            $('<p/>').html('<em>The Employee shall be entitled to claim for business reimbursements in accordance with the Company’s policies.</em> '),
            $('<p/>').html('<strong>(viii) Phương thức trả mức lương, Tiền Thưởng và phụ cấp:</strong> '),
            $('<p/>').html('Mức lương, Tiền Thưởng, phụ cấp và các khoản thanh toán khác của Người Lao Động được trả bằng Đồng Việt Nam vào tài khoản Đồng Việt Nam Người Lao Động mở tại một tổ chức tín dụng được cấp phép hoạt động tại Việt Nam. '),
            $('<p/>').html('Các Bên thỏa thuận rằng, mọi khoản phí liên quan đến việc mở, duy trì và sử dụng tài khoản nói trên do Người Lao Động chi trả. '),
            $('<p/>').html('<strong><em>Method of payment of base salary, Bonuses, and allowances:</em></strong> '),
            $('<p/>').html('<em>The Employee’s base salary, Bonus, allowances and other payments will be paid in Vietnamese Dong into a Vietnamese Dong account of the Employee opened at a credit institution licensed to operate in Vietnam.</em> '),
            $('<p/>').html('<em>The Parties agree that all costs and fees relating to the opening, maintenance and use of such bank account shall be paid at the Employee’s expense.</em>  '),
            $('<p/>').html('<strong>b. Bảo hộ lao động:</strong> '),
            $('<p/>').html('Người Lao Ðộng được cung cấp các phương tiện và được thu xếp cần thiết để đáp ứng các yêu cầu về an toàn và vệ sinh lao động tại nơi làm việc. '),
            $('<p/>').html('<strong><em>Labour protection:</em></strong> '),
            $('<p/>').html('<em>Necessary facilities and arrangements for the Employee to satisfy labour hygiene and safety requirements at work shall be provided.</em> '),
            $('<p/>').html('<strong>c. Chế độ nghỉ ngơi </strong> '),
            $('<p/>').html('<strong><em>Rest regime</em></strong> '),
            // $('<p/>').html('<strong>Rest regime<strong> '),
            $('<p/>').html('<strong>(i) Nghỉ hằng tuần:</strong> Người Lao Động được nghỉ vào thứ Bảy và Chủ nhật hàng tuần. '),
            $('<p/>').html('<strong>Weekly days-off:</strong> The Employee shall take Saturday and Sunday off. '),
            $('<p/>').html('<strong>(ii) Nghỉ lễ, tết:</strong> Người Lao Động được nghỉ lễ, tết theo quy định của Bộ luật Lao động. '),
            $('<p/>').html('<em><strong>Public holidays:</strong> The Employee is entiled to public holidays as stipulated by the Labour Code and the Company’s policies.<em> '),
            $('<p/>').html('<strong>(iii) Nghỉ hàng năm:</strong> Người Lao Ðộng được nghỉ 15 ngày nghỉ hằng năm hưởng nguyên lương khi gia nhập Công Ty, và nhận những ngày nghỉ thêm theo quy định tại các chính sách của Công Ty. '),
            $('<p/>').html('<em><strong>Annual leave: </strong>The Employee shall be entitled to 15 days annual leave when joining the Company, and receive additional days as prescribed in the policies of the Company.<em>  '),
            $('<p/>').html('<strong>(iv) Nghỉ việc riêng hưởng lương (nghỉ kết hôn và nghỉ tang lễ):</strong> '),
            $('<p/>').html('Người Lao Động được nghỉ làm việc hưởng nguyên lương các ngày nghỉ việc riêng theo quy định của Bộ luật Lao động và theo chính sách của Công Ty.'),
            $('<p/>').html('<strong><em>Personal fully paid leave (marriage and compassionate leave):<em></strong>  '),
            $('<p/>').html('<em>The Employee is entitled to take personal leave with full pay as stipulated by the Labour Code and the Company’s policies.<em> '),
            $('<p/>').html('<strong>d. Chế độ đào tạo, bồi dưỡng nâng cao trình độ kỹ năng nghề:</strong> '),
            $('<p/>').html('Người Lao Ðộng được đào tạo khi cần thiết và theo quy định của Công Ty. '),
            $('<p/>').html('<strong><em>Training, re-training and occupational skill improvement regime:<em></strong>  '),
            $('<p/>').html('<em>Training shall be provided to the Employee when deemed necessary and in accordance with the Company’s regulations.<em> '),
            $('<p/>').html('<strong>e. Chế độ bảo hiểm:</strong> '),
            $('<p/>').html('Công Ty và Người Lao Động sẽ đóng góp vào các quỹ bảo hiểm bắt buộc theo tỷ lệ được quy định theo luật. '),
            $('<p/>').html('Công Ty sẽ khấu trừ các khoản đóng của Người Lao Động và đóng các khoản này cho các cơ quan hữu quan theo quy định về các bảo hiểm bắt buộc tùy theo từng thời điểm. Việc đóng bảo hiểm được thực hiện hàng tháng. '),
            $('<p/>').html('<strong><em>Insurance regime:<em></strong>  '),
            $('<p/>').html('<em>The Company and the Employee will make contribution into the compulsory insurance funds according to rates as provided in the law.<em> '),
            $('<p/>').html('<em>The Company will withhold the contribution of the Employee and remit the same to the relevant authorities in accordance with relevant regulations on compulsory insurances from time to time. The contributions will be made on a monthly basis.<em> '),
            $('<p/>').html('<strong>f. Thuế TNCN và các khoản khấu trừ lương khác:</strong> '),
            $('<p/>').html('Mức lương, Tiền Thưởng và bất kỳ các khoản thanh toán nào khác do Công Ty trả Người Lao Động hoặc trả cho Người Lao Động, tùy theo từng trường hợp, cho việc làm của Người Lao Ðộng theo Hợp Ðồng này sẽ chịu Thuế TNCN và các khoản khấu trừ khác theo luật định (bao gồm các khoản đóng bảo hiểm bắt buộc) như quy định. '),
            $('<p/>').html('Người Lao Động cũng sẽ vẫn luôn chịu trách nhiệm tuân thủ tất cả các nghĩa vụ nộp bản khai thuế và nộp thuế ngoài lãnh thổ Việt Nam, hoặc các nghĩa vụ thuế phát từ các khoản thu nhập khác không do Công Ty chi trả. '),
            $('<p/>').html('Công Ty sẽ khấu trừ tại nguồn các khoản đóng Thuế TNCN, các loại bảo hiểm áp dụng và các khoản khấu trừ theo luật định khác theo quy định của pháp luật Việt Nam từ tiền trả hàng tháng của Người Lao Ðộng, và kê khai, đóng các khoản khấu trừ đó cho các cơ quan có thẩm quyền của Việt Nam. '),
            $('<p/>').html('<strong><em>PIT and other payroll deductions:<em></strong>  '),
            $('<p/>').html('<em>Base salary, Bonuses and any other payments whatsoever made by the Company to or for the Employee, as the case may be, for the Employee’s employment with the Company under this Contract will be subject to PIT and other statutory deductions (including compulsory insurance contributions) as required.<em> '),
            $('<p/>').html('<em>Employee will also remain responsible for complying with all tax filing and payment obligations outside of Vietnam, or tax obligations arising from the other incomes which are not paid by the Company.<em> '),
            $('<p/>').html('<em>The Company shall deduct at source the Employee’s PIT, applicable insurance contributions and any other statutory deductions required by Vietnamese laws from the Employee’s monthly remunerations, and to declare and pay such deducted amounts to the competent State authorities.<em> '),
            $('<p/>').html('<strong>2. Nghĩa vụ</strong> '),
            $('<p/>').html('<strong><em>Obligations</em></strong> '),
            $('<p/>').html('<strong>a. Hoàn thành nhiệm vụ:</strong> '),
            $('<p/>').html('Trong việc thực hiện các nhiệm vụ của mình theo Hợp Ðồng này, Người Lao Ðộng có nghĩa vụ tuân thủ đúng theo các điều khoản của Hợp Ðồng, Bộ luật Lao động, và nội quy lao động và Chính Sách Đạo Đức Kinh Doanh và các chính sách lao động khác của Công Ty và các quy định của pháp luật có liên quan đến các hoạt động của Công Ty. '),
            $('<p/>').html('Người Lao Ðộng sẽ thực hiện trách nhiệm và công việc của mình quy định tại Hợp Ðồng này theo tinh thần trách nhiệm cao nhất và bằng khả năng tốt nhất của mình. Người Lao Ðộng đồng ý sử dụng toàn bộ thời gian làm việc, sức lực và sự chú tâm cho công việc của Công Ty và sẽ sẵn sàng có mặt vào bất kỳ thời điểm hợp lý nào để thực hiện công việc do Công Ty yêu cầu. '),
            $('<p/>').html('<strong><em>Fulfillment of assigned tasks:</em></strong> '),
            $('<p/>').html('<em>In performing the Employee’s duties according to this Contract, the Employee shall be obliged to strictly comply with the provisions of this Contract, the Labour Code, the internal labour regulations, the Business Conduct Policy and other employment-related policies of the Company, and applicable laws and regulations relevant to the activities of the Company.</em> '),
            $('<p/>').html('<em>The Employee will perform all duties and services herein under the most responsible manner and to the best of the Employee’s ability. The Employee agrees to devote the Employee’s working time, energies and attention to the activities of the Company and to be available at all reasonable times to perform such work as the Company may require.</em> '),
            $('<p/>').html('<strong>b. Chấp hành kỷ luật lao động và các quy định khác:</strong> '),
            $('<p/>').html('Trong quá trình làm việc cho Công Ty, Người Lao Động phải tuân thủ và chấp hành mọi chính sách, quy tắc, quy định và/hoặc chỉ thị của Công Ty như được nêu trong các tài liệu liên quan (được sửa đổi trong từng thời điểm) và Người lao Động cam kết rằng Người Lao Động sẽ đọc để hiểu và hành động tuân thủ theo các tài liệu đó. '),
            $('<p/>').html('<strong><em>Compliance with labour disciplines and other regulations:</em></strong> '),
            $('<p/>').html('<em>During employment of the Employee with the Company, the Employee shall observe and comply with all policies, rules, regulations, and/or directives of the Company, as may be set out in relevant documents (as amended from time to time), and the Employee commits that he/she shall read to understand and act in compliance with such documents.</em> '),
            $('<p/>').html('<strong>c. Bồi thường:</strong> '),
            $('<p/>').html('Người Lao Ðộng phải bồi thường theo quy định của pháp luật Việt Nam cho các thiệt hại gây ra do hành vi vi phạm quy định, nội quy lao động và gây thiệt hại về vật chất cho Công Ty. '),
            $('<p/>').html('<strong><em>Compensation:</em></strong> '),
            $('<p/>').html('<em>The Employee shall compensate, in accordance with Vietnamese laws, for any damage caused by violations of the internal labour regulations, and for causing material damages to the Company.</em>  '),
            $('<p/>').html('<strong>d. Nỗ Lực Cao Nhất và Không Cạnh Tranh:</strong> '),
            $('<p/>').html('Trong suốt thời gian làm việc tại Công Ty, Người Lao Động sẽ cống hiến những nỗ lực cao nhất cho việc hoạt động của Công Ty. Ngoài ra, Người Lao Động sẽ không tham gia bất cứ việc kinh doanh nào, bất kể của chính Người Lao Động hay của bất kỳ người nào hoặc tổ chức nào cạnh tranh với hoạt động của Công Ty. '),
            $('<p/>').html('<strong><em>Best Efforts & Non-Compete</em></strong> '),
            $('<p/>').html('<em>During the Employee’s employment with the Company, the Employee will devote the Employee’s best efforts to the Company’s operation. Also, during the Employee’s employment with the Company, Employee will not engage in any business, whether for the Employee or in any capacity, for another person or entity, that competes with the Company’s operation. </em> '),
            $('<p/>').html(' ')
        ),
        $('<div class="offerClause">').append(
            $('<p class="center"/>').html('<strong>ÐIỀU 5: QUYỀN VÀ NGHĨA VỤ CỦA CÔNG TY </strong>'),
            $('<p class="center"/>').html('<strong>ARTICLE 5: RIGHTS AND OBLIGATIONS OF THE COMPANY</strong>')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>1. Quyền </strong> '),
            $('<p/>').html('<strong>Rights</strong> '),
            $('<p/>').html('<strong>a. Giao việc:</strong> '),
            $('<p/>').html('Công Ty có quyền giao, bố trí, phân chia công việc cho Người Lao Ðộng và điều chuyển, quản lý Người Lao Ðộng theo yêu cầu của công việc và căn cứ vào pháp luật Việt Nam. '),
            $('<p/>').html('<strong><em>Work assignment:</em></strong> '),
            $('<p/>').html('<em>The Company shall have the right to assign, arrange, allocate work for, relocate and manage the Employee in accordance with work requirements and subject to Vietnamese laws.</em> '),
            $('<p/>').html('<strong>b. Chấm dứt Hợp Ðồng:</strong> '),
            $('<p/>').html('Công Ty có thể tạm hoãn, chấm dứt quan hệ lao động, kỷ luật Người Lao Ðộng theo những trường hợp đã nêu trong nội quy lao động và được pháp luật lao động Việt Nam cho phép. '),
            $('<p/>').html('<strong><em>Termination of the Contract:</em></strong> '),
            $('<p/>').html('<em>The Company may suspend, terminate the Employee’s employment, discipline the Employee under the circumstances prescribed in the internal labour regulation and as allowed by Vietnamese laws.</em> '),
            $('<p/>').html('<strong>2. Nghĩa vụ </strong> '),
            $('<p/>').html('<strong><em>Obligations</em></strong> '),
            $('<p/>').html('<strong>a. Bảo đảm công việc:</strong> '),
            $('<p/>').html('Công Ty bảo đảm bố trí các công việc và nơi làm việc thích hợp cho Người Lao Ðộng và tạo điều kiện làm việc phù hợp để Người Lao Động có thể hoàn thành công việc được giao một cách hiệu quả nhất theo các điều khoản của Hợp Đồng này. '),
            $('<p/>').html('<strong><em>Guarantee of work:</em></strong> '),
            $('<p/>').html('<em>The Company shall ensure arrangement of appropriate work and workplace for the Employee and shall provide the Employee with appropriate working conditions so that the Employee can fulfil assigned duties in the most efficient manner in accordance with the provisions of this Contract.</em> '),
            $('<p/>').html('<strong>b. Bảo đảm phúc lợi của Người Lao Ðộng:</strong> '),
            $('<p/>').html('Công Ty trả đầy đủ và đúng thời hạn tất cả các khoản tiền công và phúc lợi cho Người Lao Ðộng theo quy định của Hợp Ðồng này và các quy định khác của Công Ty. '),
            $('<p/>').html('<strong><em>Guarantee of the Employee’s benefits:</em></strong> '),
            $('<p/>').html('<em>The Company shall fully and duly pay the Employee all remunerations and benefits as provided under this Contract and according to other regulations of the Company.</em> ')
        ),
        $('<div class="offerClause">').append(
            $('<p class="center"/>').html('<strong>ĐIỀU 6: CÁC ĐIỀU KHOẢN KHÁC </strong>'),
            $('<p class="center"/>').html('<strong>ARTICLE 6: MISCELLANEOUS PROVISIONS</strong>')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>1. Việc làm/ Kinh doanh bên ngoài:</strong> '),
            $('<p/>').html('Nếu Người Lao Động muốn tham gia một quan hệ lao động khác, tham gia vào cung cấp dịch vụ hoặc bắt đầu tự kinh doanh, Người Lao Động phải tuân theo những chỉ dẫn được nêu trong Chính sách Đạo Đức Kinh Doanh của Apple. '),
            $('<p/>').html('<strong><em>External employment/business:</em></strong> '),
            $('<p/>').html('<em>If the Employee wants to engage in another employment or service, or start the Employee’s own business, the Employee shall follow the guidelines as indicated in Apple Business Conduct Policy.</em> ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>2. Lao động nước ngoài:</strong> '),
            $('<p/>').html('Người Lao Động là lao động nước ngoài cam kết đảm bảo tuân thủ nghiêm chỉnh các quy định của pháp luật Việt Nam, đặc biệt là các quy định liên quan đến xuất nhập cảnh, cư trú, giấy phép lao động và bất kỳ các loại giấy phép, chấp thuận hoặc đăng ký nào khác theo quy định của pháp luật Việt Nam. '),
            $('<p/>').html('<strong><em>Foreign employee:</em></strong> '),
            $('<p/>').html('<em>The Employee, who is a foreign national, shall commit to strictly comply with the provisions of Vietnamese laws, especially provisions regarding immigration, residence, work permits and any other permits, approval or registration in accordance with the provisions of Vietnamese laws.</em> ')
        ),
        $('<div class="offerClause">').append(
            $('<p class="center"/>').html('<strong>ÐIỀU 7: ÐIỀU KHOẢN THI HÀNH  </strong>'),
            $('<p class="center"/>').html('<strong>ARTICLE 7: IMPLEMENTING PROVISIONS</strong>')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>1. Áp dụng:</strong> '),
            $('<p/>').html('Đối với các vấn đề về lao động mà không được ghi trong Hợp Ðồng này thì áp dụng quy định của nội quy lao động, hoặc pháp luật Việt Nam. '),
            $('<p/>').html('Trong thời gian tuyển dụng và làm việc, Người Lao Ðộng và Công Ty có thể giao kết các thỏa thuận khác về các điều khoản và điều kiện lao động bao gồm nhưng không giới hạn thư giao nhiệm vụ, thỏa thuận đào tạo, điều chỉnh lương, thông báo thay đổi lương/điều chuyển mà không trái với pháp luật Việt Nam. Những thỏa thuận như thế cũng sẽ điều chỉnh quan hệ lao động được hình thành từ Hợp Đồng này. '),
            $('<p/>').html('<strong><em>Application:</em></strong> '),
            $('<p/>').html('<em>Any issues which are not set out in this Contract shall follow the provisions of internal labour regulations, or Vietnamese laws.</em> '),
            $('<p/>').html('<em>During the period of recruitment and employment, the Employee and the Company may enter into other agreements regarding the terms and conditions of employment including but not limited to letters of assignment, training agreements, salary adjustments, notices of changes of salary/assignment that do not contradict the Vietnamese laws. Any such agreement shall govern the employment relationship arising from this Contract.</em> '),
            $('<p/>').html('<strong>2. Sự toàn vẹn và sửa đổi hợp đồng:</strong> '),
            $('<p/>').html('Hợp Ðồng này, cùng với các phụ lục và tài liệu đính kèm thể hiện toàn bộ sự thỏa thuận giữa Công Ty và Người Lao Ðộng liên quan tới những vấn đề được nêu trong Hợp Ðồng này và thay thế toàn bộ những thỏa thuận, thảo luận, hoặc tuyên bố trước đây giữa các Bên, bao gồm, nhưng không giới hạn, bất kỳ các tuyên bố nào đưa ra trong các cuộc phỏng vấn hoặc buổi đàm phán với Người Lao Ðộng, cho dù bằng lời nói hay bằng văn bản, bao gồm nhưng không giới hạn bởi thư mời làm việc đã ký giữa Người Lao Động và Công Ty. '),
            $('<p/>').html('Bất kỳ sửa đổi, thay đổi nào đối với Hợp Ðồng này hoặc bất kỳ sự từ bỏ nào đối với bất kỳ các quyền nào được quy định tại Hợp Ðồng này đều không có hiệu lực trừ khi được lập thành văn bản. Với thông báo trước ít nhất 03 (ba) ngày, bất kỳ Bên nào của Hợp Ðồng cũng đều có quyền đề nghị Bên kia sửa đổi và/hoặc bổ sung Hợp Ðồng này. Nếu một trong các Bên không đồng ý với sự thay đổi và/hoặc bổ sung, hai Bên sẽ tiếp tục thực hiện Hợp Ðồng này hoặc cùng chấm dứt Hợp Ðồng theo pháp luật Việt Nam.'),
            $('<p/>').html('<strong><em>Integrity and amendment of the Contract:</em></strong> '),
            $('<p/>').html('<em>This Contract, together with its appendices and attachments, sets forth the entire agreement between the Company and the Employee regarding the subject matters herein and supersedes all prior agreements, discussions or representations between the Parties including, but not limited to, any representations made during the Employee’s interviews or negotiations, whether written or verbal, including but not limited to the offer letter signed between the Employee and the Company.</em> '),
            $('<p/>').html('<em>No modification or amendment of this Contract, nor any waiver of any rights under this Contract, will be enforceable unless made in writing. With a notice of at least 03 (three) days, either Party to this Contract may request the other Party to amend and/or supplement this Contract. Where one of the Parties does not consent to the amendments and/or supplements, both Parties shall continue the performance this Contract or mutually terminate the Contract in accordance with Vietnamese laws.</em> '),
            $('<p/>').html('<strong>3.  Chấm dứt Hợp đồng</strong> ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'Local') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('Trong trường hợp được pháp luật cho phép, các Bên đồng ý rằng bất kỳ Bên nào trong hai Bên đều có thể chấm dứt Hợp Đồng, có hoặc không có lý do, bằng cách gửi cho Bên kia thông báo bằng văn bản trước 45 ngày hoặc trả mức lương cho 45 ngày như là khoản thanh toán thay thế cho thông báo.')
        ),
       (employee.Vietnam_Hire_Type_Code == 'DFH') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('Trong trường hợp được pháp luật cho phép, các Bên đồng ý rằng bất kỳ Bên nào trong hai Bên đều có thể chấm dứt Hợp Đồng, có hoặc không có lý do, bằng cách gửi cho Bên kia thông báo bằng văn bản trước 30 ngày hoặc trả mức lương cho 30 ngày như là khoản thanh toán thay thế cho thông báo.')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('Việc chấm dứt hợp đồng lao động này sẽ tuân thủ quy định của pháp luật Việt Nam. Trong chừng mực mà pháp luật cho phép, Công Ty có thể vào bất kỳ lúc nào chấm dứt hợp đồng lao động này trong các trường hợp sau đây: '),
            $('<ol/>').append(
                $('<li/>').html('Người Lao Động vi phạm bất kỳ quy định nào của hợp đồng này; '),
                $('<li/>').html('Người Lao Động vi phạm bất kỳ quy định nào hoặc không tuân thủ bất kỳ chỉ đạo nào của Công Ty; '),
                $('<li/>').html('Người Lao Động vi phạm bất kỳ quy định nào của Chính Sách Đạo Đức Kinh Doanh của Công Ty; '),
                $('<li/>').html('Người Lao Động thực hiện bất kỳ hành vi không trung thực nào, hoặc bất kỳ hành vi không phù hợp nào mà theo ý kiến của Công Ty là có thể sẽ mang tới sự chế nhạo hoặc thiếu tôn trọng của công chúng hoặc của bất kỳ cá nhân nào đối với Công Ty hoặc bất kỳ công ty có liên quan nào, hoặc gây thiệt hại về uy tín đối với Công Ty hoặc bất kỳ công ty có liên quan nào. ')
            ),    
            $('<p/>').html('<strong><em>Termination</em></strong> ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'Local') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>To the extent allowed by law, it is agreed that either Party may, with or without cause, terminate the Contract by giving to the other Party 45 days written notice or 45-day base salary as payment in lieu of notice. To the extent allowed by law, the Company may at any time terminate this Contract in any of the following events:</em> ')
        ),
        (employee.Vietnam_Hire_Type_Code == 'DFH') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<em>To the extent allowed by law, it is agreed that either Party may, with or without cause, terminate the Contract by giving to the other Party 30 days written notice or 30 days base salary as payment in lieu of notice. To the extent allowed by law, the Company may at any time terminate this Contract in any of the following events: </em> ')
        ),
        $('<div class="offerClause">').append(
            $('<ol/>').append(
                $('<li/>').html('<em>The Employee commits any breach of this contract.</em> '),
                $('<li/>').html('<em>The Employee violates any rule or disobey any lawful instruction given by the Company.</em> '),
                $('<li/>').html('<em>The Employee violates any section of Business Conduct policy of the Company.</em> '),
                $('<li/>').html('<em>The Employee commits any acts of dishonesty, or any action of impropriety which in the Company’s opinion is likely to bring the Company or any related company into ridicule or disrespect of the public or any person, or otherwise damaging the reputation of the Company or any related company.</em> ')
            )   
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>4. Luật điều chỉnh và giải quyết tranh chấp:</strong> '),
            $('<p/>').html('Hợp Ðồng này chịu sự điều chỉnh của pháp luật Việt Nam. Bất kỳ tranh chấp nào phát sinh từ Hợp Ðồng này sẽ được giải quyết theo pháp luật Việt Nam. '),
            $('<p/>').html('<strong><em>Governing law and dispute resolution:</em></strong> '),
            $('<p/>').html('<em>This Contract shall be governed by the laws of Vietnam. Any dispute arising from this Contract will be settled in accordance with provisions of Vietnamese laws.</em> '),
            $('<p/>').html('<strong>5. Bản ký và ngôn ngữ:</strong> '),
            $('<p/>').html('Hợp Ðồng này được làm thành 02 (hai) bản gốc song ngữ Việt-Anh có giá trị ngang nhau. Mỗi Bên giữ 01 (một) bản. Trong trường hợp có sự khác nhau giữa tiếng Việt và tiếng Anh, thì bản tiếng Anh sẽ được dùng để giải thích Hợp Ðồng. '),
            $('<p/>').html('<strong><em>Signing versions and languages:</em></strong> '),
            $('<p/>').html('<em>This Contract is executed in 02 (two) original bilingual Vietnamese - English copies with equal validity. Each Party will keep 01 (one) copy. In the case of any inconsistency between the Vietnamese and English versions, the English version will be used to interpret the Contract.</em> ')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' ')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' ')
        ),
        (employee.Vietnam_Entity_Value == 'Apple Vietnam APO Limited Liability Company') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>CÔNG TY TNHH APPLE VIỆT NAM APO</strong> '),
            $('<p/>').html('<em>Apple Vietnam APO Limited Liability Company</em> ')
        ),
        (employee.Vietnam_Entity_Value == 'Apple Vietnam Limited Liability Company') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('<strong>CÔNG TY TNHH APPLE VIỆT NAM </strong> '),
            $('<p/>').html('<em>Apple Vietnam Limited Liability Company</em> ')
        )
    );
    
    $("#markup2").html("").append(
        /* Sarah Signature
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause2"/>').append(
                $('<div class="text-left"/>').html('<img src=' + company.SarahSignature + '>')
            )
        ),*/
        // OfferClause 2
        (employee.Vietnam_Hire_Type_Code == 'DFH') &&
        $('<div class="offerClause2">').append(
            $('<p/>').append(' '),
            $('<p/>').append(' '),
            $('<p/>').append(' '),
            $('<p/>').append(' '),
            $('<p/>').append(' '),
            $('<p/>').append(' '),
            $('<p/>').append(' ')
        ),
        $('<div class="offerClause2">').append(
            $('<p/>').append('________________________________________ '),
            $('<p/>').append('Parul Dewan  '),
            $('<p/>').append('HR Senior Manager / Quản Lý Nhân Sự Cao Cấp'),
            $('<p/>').append(' '),
            $('<p/>').append(' '),
            $('<p/>').append('<strong>NGƯỜI LAO ĐỘNG</strong>' ),
            $('<p/>').append('<em>THE EMPLOYEE</em>')
        )
        // end append
    );
    $("#markup3").html("").append(
        /* Sarah Signature
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause2"/>').append(
                $('<div class="text-left"/>').html('<img src=' + company.SarahSignature + '>')
            )
        ),*/
        // OfferClause 2
        $('<div class="offerClause3">').append(
            $('<p/>').append('________________________________________ '),
            $('<p/>').append(employee.First_Name + ' ' + employee.Last_Name)
        )
        // end append
    );    

}

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}


function fnConvertDate(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return months[month] + ' ' + parseInt(n_date) + ', ' + year;

}


function fnConvertFullDate(eventDate) {

    var d = new Date(eventDate);
    console.log(d);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return days[parseInt(day)] + ', ' + parseInt(n_date) + ' ' + months[month] + ' ' + year;

}

function fnConvertFullDate2(eventDate) {

    var d = new Date(eventDate);
    console.log(d);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return parseInt(n_date) + ' ' + months[month] + ' ' + year;
}

function fnConvertFullDate3(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return days[parseInt(day)] + ' the ' + ordinal_suffix_of(parseInt(n_date)) + ' of ' + months[month] + ' ' + year;

}

function fnTime_And_Half(amount, rate) {
    amount = (amount.indexOf(',') != -1) ? amount.split(',').join('') : amount;
    var total = (parseFloat(amount) + parseFloat((parseFloat(amount) * rate)));
    return formatCurrency(total);
}



function formatCurrency(total) {
    return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}

function fnFormatCurrency(total) {
    if (total) {
        total = (total.indexOf(',') != -1) ? total.split(',').join('') : total;
        return formatCurrency(total);
    } else {
        return '0.00';
    }
}

function fnFormatNumeric(total){
       var number = total.replace(/[^0-9\.]+/g,"");
       var bonusInst = number *.5      
       return formatCurrency(bonusInst);
}

$(function() {
    function _fnAssignValue(targetElement, value) {
        document.getElementById(targetElement).value = value;
        $("#" + targetElement).attr("value", value);
    }

    //function fnGetName(first, middlename, last) {

       // var middle_inital = ((middlename) ? middlename.substring(0, 1) + ' ' : '');
    //    var fullname = first + " " + middlename + " " + last;
    //    return fullname;
    //}

    //var name = fnGetName(employee.Candidate_First_Name, employee.Candidate_Middle_Name, employee.Candidate_Last_Name);
    //_fnAssignValue('Full_Name', name);

    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");
var imgParulSignature = "<img src='' />";
        var arrParts = [
            [1, 'hidden_pg'],
            [0, 'imgParulSignature']
        ];

        //showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
    else{
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
        makeOfferLetter('hidden_pg3','offerClause3');
    }
});
