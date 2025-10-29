# Деплой на Vercel

## Шаг 1: Подготовка репозитория

1. Убедитесь, что все изменения закоммичены:
```bash
git add .
git commit -m "Prepare for production"
git push origin main
```

## Шаг 2: Создание проекта в Vercel

1. Откройте [vercel.com](https://vercel.com) и войдите в аккаунт
2. Нажмите **"Add New Project"**
3. Импортируйте репозиторий `bestidea` (из GitHub)
4. Настройки проекта:
   - **Framework Preset**: Next.js
   - **Root Directory**: `web`
   - **Build Command**: (автоматически) `next build`
   - **Output Directory**: (автоматически) `.next`

## Шаг 3: Переменные окружения

В **Settings → Environment Variables** добавьте:

### Обязательные:
```
GSHEET_ID=ваш_id_таблицы_из_url
GSVC_EMAIL=service_account@project.iam.gserviceaccount.com
GSVC_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
```

### Опциональные:
```
GSHEET_SHEET=Leads
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
OPENAI_API_KEY=sk-...ваш_ключ
OPENAI_MODEL=gpt-4o-mini
```

**Важно:**
- В `GSVC_KEY` используйте `\n` вместо реальных переносов строк
- Скопируйте ключ из JSON сервисного аккаунта, замените переводы строк на `\n`

## Шаг 4: Первый деплой

1. После добавления переменных нажмите **"Deploy"**
2. Дождитесь завершения билда
3. После успешного деплоя получите URL: `https://bestidea-xxx.vercel.app`

## Шаг 5: Обновление NEXT_PUBLIC_SITE_URL

1. После первого деплоя получите ваш Vercel URL
2. Вернитесь в **Environment Variables**
3. Обновите или добавьте `NEXT_PUBLIC_SITE_URL` = `https://your-project.vercel.app`
4. Нажмите **"Redeploy"** для применения изменений

## Шаг 6: Подключение домена (опционально)

1. В **Settings → Domains** добавьте ваш домен
2. Следуйте инструкциям Vercel для настройки DNS
3. Обычно требуется добавить CNAME или A-запись в настройках DNS-провайдера
4. После подключения обновите `NEXT_PUBLIC_SITE_URL` на ваш домен

## Проверка после деплоя

✅ Главная страница загружается  
✅ 3D Hero отображается корректно  
✅ Чат-виджет работает (проверьте 1-2 запроса)  
✅ Форма лидов отправляется → проверьте Google Sheets  
✅ Страницы `/cases` и `/pricing` работают  
✅ `/sitemap.xml` и `/robots.txt` доступны  
✅ OG-изображение генерируется (`/api/og`)

## Troubleshooting

### Ошибка 404 в Google Sheets
- Проверьте `GSHEET_ID` (правильный ID из URL)
- Убедитесь, что сервисный аккаунт добавлен в таблицу с правами **Редактор**
- Проверьте имя листа (по умолчанию `Leads`, можно задать через `GSHEET_SHEET`)

### Чат не отвечает
- Проверьте `OPENAI_API_KEY` в Environment Variables
- Убедитесь, что модель доступна (по умолчанию `gpt-4o-mini`)
- Проверьте логи в Vercel Dashboard → Functions

### Сборка не проходит
- Проверьте логи билда в Vercel Dashboard
- Убедитесь, что `Root Directory` = `web`
- Проверьте, что все зависимости установлены

## Контакты поддержки

При возникновении проблем проверьте:
1. [Vercel Documentation](https://vercel.com/docs)
2. Логи в Vercel Dashboard → Functions
3. Network tab в DevTools браузера

