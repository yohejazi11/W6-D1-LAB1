import Nav from './Nav.jsx'
function Campinfo() {
    return (
        <div className='h-[100vh]' >
            <Nav></Nav>
            <div className='flex flex-col items-center w-[100%] h-[50vh] text-right'>
                <div className='w-[50%] bg-[#e7ddff]  rounded-md px-[3rem] py-[3rem]'>
                    <h1 className='font-bold'>معسكر جافا سكريبت لتطوير تطبيقات الانترنت</h1>
                    <h3  className='font-bold'>الوصف</h3>
                    <p>يهدف معسكر تطوير واجهات تطبيقات الويب باستخدام لغة JavaScript لتصميم وتطوير واجهات تطبيقات الويب على مستوى احترافي. يبدأ المتدرّب رحلته التعليمية من دراسة أساسيات تطبيقات الويب وفهم كيفية عملها، مع التركيز على تطوير مهارات التصميم باستخدام Figma، ويُتيح المعسكر للمتدرّب الفرصة للتفاعل مع Git & GitHub بشكل مباشر، حيث يعتمد على جلسات تعليمية وتطبيقات عملية تعتمد على مشاريع فعّالة؛ كما يتعامل المشاركون مع أدوات متقدمة مثل Redux لإدارة حالة التطبيق بشكل فعّال، ويتعلمون كيفية استخدام اختبار البرمج
                    </p>
                    <h3  className='font-bold'>الأهداف</h3>
                    <p>تعلم مفاهيم بناء المواقع على الإنترنت.
                        استخدام HTML لبناء الصفحات وتنسيقها باستخدام CSS.
                        تعلّم لغة JavaScript لبناء Front End Web Application.
                        استخدام مكتبات برمجية وأُطر عمل لتنظيم وتسريع عملية التطوير بكفاءة.
                        استخدام إطار عمل React لبناء واجهات المستخدم.
                        استخدام Git و Github لتتبع المشروع والعمل كفريق.
                        استخدام Figma لتصميم واجهات المستخدم
                        استخدام Jest لاختبار جودة المُخرجات
                        تعلم مفاهيم ux وكيفية البحث</p>
                    <div className='mt-[1rem] border-[2px] rounded-md border-slate-900  h-[10vh] w-[100%] flex justify-end items-center'>
                        <div className='flex-1 text-right border-r-[2px] border-slate-900  px-[32px] py-[16px]'>تاريخ البداية 29-12-2024</div>
                        <div className='flex-1 text-right px-[32px] py-[16px]'>تاريخ النهاية 20-03-2025</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Campinfo
