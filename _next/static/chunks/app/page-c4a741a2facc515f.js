<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>尊嘟假嘟翻译器 O.o</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#a855f7', // 类似图中的紫色
                        primaryHover: '#9333ea',
                    }
                }
            }
        }
    </script>
    <style>
        /* 模拟图中的柔和渐变背景 */
        body {
            background: linear-gradient(135deg, #fbcfe8 0%, #fff7ed 50%, #fef08a 100%);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        /* 自定义滚动条 */
        textarea::-webkit-scrollbar {
            width: 8px;
        }
        textarea::-webkit-scrollbar-thumb {
            background-color: #e5e7eb;
            border-radius: 4px;
        }
    </style>
</head>

<body class="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">

    <div class="bg-white py-10 px-8 shadow-2xl rounded-2xl w-full max-w-lg transition-all duration-300">
        
        <div class="text-center mb-10">
            <h1 class="text-3xl font-bold text-gray-800 tracking-tight">尊嘟假嘟翻译器 O.o</h1>
        </div>

        <div class="space-y-6">
            
            <div class="flex justify-center space-x-8 pb-2">
                <label class="cursor-pointer flex items-center group">
                    <input type="radio" name="language" value="human" class="w-5 h-5 text-primary border-gray-300 focus:ring-primary transition duration-150 ease-in-out">
                    <span class="ml-2 text-gray-700 font-medium group-hover:text-primary transition-colors">人语</span>
                </label>
                <label class="cursor-pointer flex items-center group">
                    <input type="radio" name="language" value="dog" checked class="w-5 h-5 text-primary border-gray-300 focus:ring-primary transition duration-150 ease-in-out">
                    <span class="ml-2 text-gray-700 font-medium group-hover:text-primary transition-colors">尊嘟语</span>
                </label>
            </div>

            <div>
                <div class="flex justify-between items-end mb-2">
                    <label for="inputText" class="block text-sm font-semibold text-gray-600 pl-1">
                        请输入内容
                    </label>
                    <button type="button" id="pasteBtn" class="text-xs font-medium text-primary hover:text-primaryHover bg-purple-50 hover:bg-purple-100 px-2 py-1 rounded-md transition-colors flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                        读取剪贴板
                    </button>
                </div>
                
                <div class="relative rounded-xl shadow-sm">
                    <textarea id="inputText" name="inputText" rows="4"
                        class="block w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary sm:text-sm p-4 transition-all duration-200 ease-in-out resize-none outline-none border hover:border-gray-300"
                        placeholder="在此输入想要翻译的人话..."></textarea>
                </div>
            </div>

            <div>
                <button type="button"
                    class="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform active:scale-[0.98]">
                    翻 译
                </button>
            </div>

        </div>

        <div class="mt-8 pt-6 border-t border-gray-100">
            <div class="text-xs text-gray-400 space-y-2 text-center leading-relaxed">
                <p>PS: 这是一个尊嘟语和人语互相翻译的工具。</p>
                <p>
                    原作者: SnailSword | 源代码: <a href="https://github.com/fuzipei/zundu" target="_blank" class="text-primary hover:underline">GitHub</a>
                </p>
                <p>
                    Bug反馈: <a href="mailto:help@richdev.cn" class="text-primary hover:underline">help@richdev.cn</a>
                </p>
            </div>
        </div>
    </div>

    <script>
        document.getElementById('pasteBtn').addEventListener('click', async () => {
            try {
                const text = await navigator.clipboard.readText();
                const textarea = document.getElementById('inputText');
                
                textarea.value = text;
                
                // 触发事件以适配现代前端框架
                const inputEvent = new Event('input', { bubbles: true });
                textarea.dispatchEvent(inputEvent);
                
                // 视觉反馈：闪烁紫色边框
                textarea.classList.add('ring-2', 'ring-primary', 'bg-white');
                textarea.classList.remove('bg-gray-50');
                
                setTimeout(() => {
                    textarea.classList.remove('ring-2', 'ring-primary', 'bg-white');
                    textarea.classList.add('bg-gray-50');
                }, 300);
                
            } catch (err) {
                console.error('无法读取剪贴板:', err);
                alert('请允许浏览器访问剪贴板权限');
            }
        });
    </script>
</body>
</html>