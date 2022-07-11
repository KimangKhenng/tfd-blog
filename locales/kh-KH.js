import kh from "../static/json/kh.json";
const messages = {
  name: "ឈ្មោះ",
  firstname: "ឈ្មោះ",
  lastname: "ត្រកូល",
  date_of_birth: "ថ្ងៃខែឆ្នាំកំណេីត",
  email: "អាស័យដ្ឋាន សារអេឡិចត្រូនិច",
  phone: "លេខទូរស័ព្ទ",
  message: "ខ្លឹមសារ",
  phone_error: "លេខទូរស័ព្ទត្រូវបានគេប្រេីដេីម្បីចុះឈ្មោះរួចហេីយ",
  email_error: "សារអេឡិចត្រូនិច ត្រូវបានគេប្រេីដេីម្បីចុះឈ្មោះរួចហេីយ",
  submitting: "កំពុងដាក់ស្នេីរ",
  loading: "សូមរងចាំ",
  by_signing_up: "តាមរយៈការចុះឈ្មោះ អ្នកយល់ព្រមទៅលេី",
  term_of_service: "ល័ក្ខខ័ណ្ឌនៃការប្រើប្រាស់",
  registration_done: "ការចុះឈ្មោះរួចរាល់ហើយ!",
  please_check_email_inbox:
    "សូមពិនិត្យមើលប្រអប់សំបុត្រអ៊ីមែលរបស់អ្នកសម្រាប់ការផ្ទៀងផ្ទាត់។",
  choose_date_of_birth: "ជ្រើសរើសថ្ងៃខែឆ្នាំកំណើត",
  logout: "ចេញ",
  login: "ចូល",
  language: "ប្តូរភាសា",
  social: "បណ្តាញសង្គម",
  join_our_social_networks: "ចូលបណ្តាញសង្គមរបស់យើង",
  about_us: "អំពីយើង",
  more: "ច្រើនទៀត",
  contact: "ទំនាក់ទំនង",
  articles: "អត្ថបទ",
  projects: "គំរោង",
  welcome_to: "សូមស្វាគមន៍មកកាន់",
  home: "ទំព័រដើម",
  read_more: "អានបន្ថែម",
  chau_dara: "ចៅ ដារ៉ា",
  founder: "ស្ថាបនិក",
  chau_dara_quote: "ចាប់ផ្តើមជាមួយ <strong>ចំណង់ចំណូលចិត្ត</strong>",
  tfd_mission:
    "<strong>TFD(Teaching For Devs)</strong> គឺជាគំនិតផ្តួចផ្តើមមួយ ក្នុងគោលបំណងពាំនាំ ចំនេះដឹងថ្មី នឹង ប្លែកៗដែលមិនត្រូវបានចាប់អារម្មណ៍ពីសារៈសំខាន់របស់វា ពីមុនមក។ គំនិតផ្តួចផ្តើមនេះក៏ធ្វើឡើងក្នុងគោលបំណង ពង្រឹង នឹងជំរុញការគិតបែប វិទ្យាសាស្រ្តប្រកបដោយហេតុផល នឹង ការវិភាគច្បាស់លាស់។",
  read_articles: "អានអត្ថបទ",
  our_project: "គំរោងរបស់យើង",
  share_this_article: "ចែករំលែកអត្ថបទនេះ",
  all_issues: "អត្ថបទទាំងអស់",
  cookies: "ខូគី (Cookies)",
  cookies_description:
    "គេហទំព័រនេះប្រើខូគីសម្រាប់ការវិភាគ និងការកែលម្អនៅលើទំព័រ! ដោយបន្តការប្រើប្រាស់ មានន័យថាអ្នកព្រមទទួលយកខូគី។",
  learn_about_cookies: "ស្វែងយល់បន្ថែមពី Cookies",
  acceptAll: "យល់ព្រម",
  declineAll: "លុបចោលទាំងអស់",
  manageCookies: "គ្រប់គ្រងខូគី",
  close: "ចាកចេញ",
  save: "រក្សាទុក",
  ga_description:
    "Google Analytics គឺជាសេវាកម្មវិភាគគេហទំព័រដែលផ្តល់ដោយ Google ដែលតាមដាន និងរាយការណ៍អំពីចរាចរណ៍គេហទំព័រ។",
  cookies_control: "ប្រើសម្រាប់ការគ្រប់គ្រង Cookie ។",
  necessary: "ខូឃីចាំបាច់",
  about_quote:
    "ពេលអាយុ ២០ ឆ្នាំ អ្នកខ្វាយខ្វល់នឹងអ្វីដែល មនុស្សនៅជុំវិញគិតពីអ្នក។ ពេលអាយុ ៤០ ឆ្នាំ អ្នកលែងសូវខ្វល់ពីអ្វីដែលគេគិតពីអ្នក ពេលដល់អាយុ ៦០ ឆ្នាំ ទើបអ្នកដឹងថាគ្មាននរណាម្នាក់ខ្វល់ពីអ្នកតាំងពីអើយមក។",
  quote_owner: "រកមុខអ្នកនិយាយមិនទាន់ឃើញ",
  random_image: "គ្រាន់តែជារូបភាពចៃដន្យ កុំសួរខ្ញុំថាហេតុអ្វី",
  founder_quote: "Why nice girls hate me?",
  donation: "ការបរិច្ចាគ",
  get_source_code: "ទាញយកកូដ",
  page: "ទំព័រ",
  no_articles: "អត់មានអីអានទេ",
  comments: "មតិយោបល់",
  contact_us:
    "ទំនាក់ទំនងមកយើងខ្ញុំ! តើ\u200Bយើង\u200Bអាច\u200Bជួយ\u200Bអ្នក\u200Bដោយ\u200Bរបៀបណា\u200B?",
  submit: "ដាក់ស្នើ",
  submit_success:
    "អរគុណ\u200Bច្រើន! យើងបានទទួលសំណើរបស់អ្នកហើយ! យើង\u200Bនឹង\u200Bទាក់ទង\u200Bទៅ\u200Bអ្នក\u200Bវិញ\u200B។",
  course: "មេរៀន",
  all_course: "មេរៀនទាំងអស់",
  email_not_exist: "មិនមានគណនីជាមួយអ៊ីមែលនេះទេ!",
  wrong_credential: "ព័ត៍មានចូលមិនត្រឹមត្រូវ!",
  username_already_exists: "ឈ្មោះអ្នកប្រើប្រាស់មានរួចមកហើយ សូមដាក់ឈ្មោះផ្សេង",
  email_verification_done: "សារអេឡិចត្រូនិចត្រូវបានបញ្ជាក់រួចរាល់",
  password_conform_mismatched: "បញ្ជាក់លេខសំងាត់មិនត្រូវ",
  verification_error: "ការបញ្ជាក់មានបញ្ហា:",
  username: "ឈ្មោះអ្នកប្រើប្រាស់",
  password: "លេខសំងាត់",
  confirmation: "បញ្ជាក់លេខសំងាត់",
  forgot_password: "ភ្លេចលេខសំងាត់?",
  join_community: "ចូលរួមជាមួយពួកយើង",
  by_creating_account: "តាមរយៈការបង្កើតគណនី និងចូលប្រើ មានន័យថាអ្នកយល់ព្រមនឹង",
  tos_privacy: "លក្ខខណ្ឌនៃសេវាកម្ម នឹង គោលការណ៍ឯកជនភាពរបស់ TFD",
  privacy: "គោលការណ៍ឯកជនភាព",
  receive_news: "និងដើម្បីទទួលបានព័ត៌មាន និងការធ្វើបច្ចុប្បន្នភាពពីយើង។",
  no_account: "មិនទាន់មានគណនី?",
  have_account: "មានគណនីរួចហើយ?",
  login_now: "ចូលឥឡូវនេះ!",
  sign_up_now: "ចុះឈ្មោះឥឡូវនេះ!",
  sign_up: "ចុះឈ្មោះ",
  enroll: "ចុះឈ្មោះចូលរៀន",
  your_password_is_reset:
    "ពាក្យសម្ងាត់របស់អ្នកត្រូវបានកំណត់ឡើងវិញ! សូមពិនិត្យមើលអ៊ីមែល ហើយធ្វើតាមការណែនាំ!",
  please_set_new_password: "សូមកំណត់ពាក្យសម្ងាត់ថ្មីរបស់អ្នក!",
  password_reset_done:
    "ពាក្យសម្ងាត់របស់អ្នកត្រូវបានកំណត់ឡើងវិញ សូមចូលទៅកាន់ប្រព័ន្ធ!",
  buy: "ជាវ",
  learn: "ចូលរៀន",
  click_here_to_pay: "ចុចទីនេះដើម្បីទូទាត់ជាមួយ",
  transaction_number: "លេខប្រតិបត្តិការ(Transaction Number)",
  login_to_purchase: "សូមចុះឈ្មោះជាមុនដើម្បីទិញ",
  fields: {
    firstname: "ឈ្មោះ",
    lastname: "ត្រកូល",
    email: "អាស័យដ្ឋាន សារអេឡិចត្រូនិច",
    password: "លេខសំងាត់",
    confirmation: "បញ្ជាក់លេខសំងាត់",
    sex: "ភេទ",
    username: "ឈ្មោះអ្នកប្រើប្រាស់",
    confessName: "ឈ្មោះសារភាព",
  },
  validation: kh.messages,
};
export default messages;
