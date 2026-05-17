# Digital Clock - Multiple Time Zones

A modern, responsive web application that displays the current time in different time zones simultaneously.

## 🎯 Features

✅ **Real-time Clock Updates** - Updates every second  
✅ **20+ Time Zones** - Includes major cities around the world  
✅ **Search Functionality** - Quickly find time zones  
✅ **Add/Remove Time Zones** - Customize your display  
✅ **Multiple Formats** - 12-hour, 24-hour, date, day of week  
✅ **UTC Offset Display** - See the exact offset from UTC  
✅ **Responsive Design** - Works on desktop, tablet, mobile  
✅ **Beautiful UI** - Modern gradient design with smooth animations  

## 📦 Available Time Zones

### Americas
- 🗽 New York (EST)
- 🏙️ Chicago (CST)
- ⛰️ Denver (MST)
- 🌴 Los Angeles (PST)
- 🐻 Anchorage (AKST)
- 🌺 Honolulu (HST)

### Europe
- 🇬🇧 London (GMT)
- 🇫🇷 Paris (CET)
- 🇩🇪 Berlin (CET)
- 🇷🇺 Moscow (MSK)

### Asia & Middle East
- 🇦🇪 Dubai (GST)
- 🇮🇳 New Delhi (IST)
- 🇹🇭 Bangkok (ICT)
- 🇭🇰 Hong Kong (HKT)
- 🇨🇳 Shanghai (CST)
- 🇯🇵 Tokyo (JST)
- 🇰🇷 Seoul (KST)

### Pacific
- 🇦🇺 Sydney (AEDT)
- 🇳🇿 Auckland (NZDT)
- 🌍 UTC (Coordinated Universal Time)

## 🚀 How to Use

1. **Open the application** - Visit `clock.html`
2. **View Default Time Zones** - UTC, New York, London, and Tokyo are shown by default
3. **Add a Time Zone** - Select from the dropdown menu
4. **Search** - Use the search box to quickly find a time zone
5. **Remove** - Hover over a clock card and click the × button to remove it

## 🎨 Display Information

Each time zone card shows:
- **Digital Display** - Large 24-hour format clock
- **Date** - Current date in MM/DD/YY format
- **Day** - Full day name (Monday, Tuesday, etc.)
- **UTC Offset** - Difference from UTC time
- **12-Hour Format** - Time in 12-hour format with AM/PM

## 💻 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No dependencies required
- **Responsive Design** - Mobile-first approach

## 📄 File Structure

```
public/
├── clock.html          # Main HTML page
├── clock-styles.css    # Styling
└── clock-script.js     # JavaScript logic
```

## ⚡ Performance

- Updates every 1 second
- Smooth animations and transitions
- Optimized for all devices
- No external dependencies

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 🎓 Use Cases

- **Global Teams** - Track time for team members worldwide
- **Education** - Teach about time zones and UTC
- **Travel Planning** - Check times before scheduling calls
- **Financial Trading** - Monitor market hours in different zones
- **International Business** - Coordinate across time zones

## 🔧 Customization

### Add New Time Zone

Edit `clock-script.js` and add to the `TIMEZONES` object:

```javascript
'Asia/Singapore': { 
    label: '🇸🇬 Singapore (SGT)', 
    offset: 8 
}
```

### Change Default Time Zones

Modify the `selectedTimezones` array:

```javascript
let selectedTimezones = ['UTC', 'America/New_York', 'Europe/London'];
```

### Customize Colors

Edit `clock-styles.css` background gradients:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📱 Responsive Breakpoints

- **Desktop** - Full grid layout
- **Tablet** - 2 columns
- **Mobile** - 1 column (full width)

## 🎉 Features Highlights

### Smart Search
Quickly find any time zone by typing the city name or country.

### One-Click Add
Simply select a time zone from the dropdown to add it to your display.

### Live Updates
Every clock updates in real-time, second by second.

### Responsive Layout
Automatically adapts to your screen size for optimal viewing.

## 🚀 Getting Started

1. Save the three files in your project
2. Open `clock.html` in your web browser
3. Start adding time zones!

No installation or dependencies required!

---

**Version:** 1.0.0  
**License:** MIT  
**Last Updated:** 2026-05-17
