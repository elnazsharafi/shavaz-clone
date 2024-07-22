<script>
import OfferItem from "@/components/OfferItem.vue";

export default {
  components: {OfferItem},
  data() {
    const proposals = [
      {
        name: "zed-aftab",
        nameFa: "ضدآفتاب",
        items: [
          {
            off: "10%",
            imageUrl: "/images/surprise3.webp",
            text: "143,500تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "83,000"
          },
          {
            off: "40%",
            imageUrl: "/images/surprise4.webp",
            text: "83,000تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "93,000"
          },
          {
            off: "30%",
            imageUrl: "/images/surprise5.webp",
            text: "120,000تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "200,000"
          },
          {
            off: "10%",
            imageUrl: "/images/surprise6.webp",
            text: "50,500تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "83,000"
          },
        ]
      },
      {
        name: "abresan",
        nameFa: "آبرسان",
        items: [
          {
            off: "10%",
            imageUrl: "/images/surprise3.webp",
            text: "143,500تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "83,000"
          },
          {
            off: "40%",
            imageUrl: "/images/surprise4.webp",
            text: "83,000تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "93,000"
          },
          {
            off: "30%",
            imageUrl: "/images/surprise5.webp",
            text: "120,000تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "200,000"
          },
        ]
      },
      {
        name: "zhel-shosteshoo",
        nameFa: "ژل شستشو",
        items: [
          {
            off: "10%",
            imageUrl: "/images/surprise3.webp",
            text: "143,500تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "83,000"
          },
          {
            off: "40%",
            imageUrl: "/images/surprise4.webp",
            text: "83,000تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "93,000"
          },
          {
            off: "30%",
            imageUrl: "/images/surprise5.webp",
            text: "120,000تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "200,000"
          },
          {
            off: "10%",
            imageUrl: "/images/surprise6.webp",
            text: "50,500تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "83,000"
          },
        ]
      },
      {
        name: "shampoo",
        nameFa: "شامپو",
        items: [
          {
            off: "10%",
            imageUrl: "/images/surprise3.webp",
            text: "143,500تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "83,000"
          },
          {
            off: "40%",
            imageUrl: "/images/surprise4.webp",
            text: "83,000تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "93,000"
          },
        ]
      },
      {
        name: "zed-tarigh",
        nameFa: "ضد تعریق",
        items: [
          {
            off: "10%",
            imageUrl: "/images/surprise3.webp",
            text: "143,500تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "83,000"
          },
          {
            off: "40%",
            imageUrl: "/images/surprise4.webp",
            text: "83,000تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "93,000"
          },
          {
            off: "30%",
            imageUrl: "/images/surprise5.webp",
            text: "120,000تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "200,000"
          },
          {
            off: "10%",
            imageUrl: "/images/surprise6.webp",
            text: "50,500تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "83,000"
          },
        ]
      },
      {
        name: "behdasht-shakhsi",
        nameFa: "بهداشت شخصی",
        items: [
          {
            off: "10%",
            imageUrl: "/images/surprise3.webp",
            text: "143,500تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "83,000"
          },
          {
            off: "40%",
            imageUrl: "/images/surprise4.webp",
            text: "83,000تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "93,000"
          },
          {
            off: "30%",
            imageUrl: "/images/surprise5.webp",
            text: "120,000تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "200,000"
          },
          {
            off: "10%",
            imageUrl: "/images/surprise6.webp",
            text: "50,500تومان",
            title: "ژل ضد آفتاب پرایم SPF 50 مدل C-PRIME ظرفیت 40 میلی لیت\n",
            price: "83,000"
          },
        ]
      },
    ];
    return {
      tab: proposals.length > 0 ? proposals[0].name : undefined,
      proposals: proposals,
    }
  }
}
</script>

<template>
  <v-sheet class="mt-16 v-container">
    <h2>پیشنهاد شاواز</h2>
  </v-sheet>
  <v-sheet class="v-container d-flex flex-row rounded-lg border px-0 py-0">
    <v-tabs
        class="v-col-2 bg-grey-lighten-5"
        v-model="tab"
        color="#d72685"
        hide-slider
        direction="vertical"
    >
      <v-tab
          v-for="tabItem in proposals"
          :text="tabItem.nameFa"
          :value="tabItem.name"
          :key="tabItem.name">
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab" class="v-col-10 px-0 py-0">
      <v-tabs-window-item
          v-for="proposal in proposals"
          :key="proposal.name"
          :value="proposal.name"
      >
        <v-sheet class="d-flex flex-row">
          <OfferItem
              style="width: 20%"
              v-for="item in proposal.items"
              :off="item.off"
              :image="item.imageUrl"
              :title="item.title"
              :text="item.text"
              :price="item.price"
              :key="item.imageUrl">
          </OfferItem>
        </v-sheet>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-sheet>
</template>